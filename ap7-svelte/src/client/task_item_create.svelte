<svelte:head>
<title>Show</title>
<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import { z } from "zod";
import { onMount } from 'svelte';
import LibCommon from '../lib/LibCommon';
import CrudCreate from "./task_items/CrudCreate";
import Crud from './task_items/Crud';
import { todoSchema } from './task_items/create/types';

/** @type {import('./$types').PageData} */
let selected = 1;
export let id = 0;
let complete = "", start_date= "";
let errors: { [key: string]: string } = {};
//
const startProc= async function() {
  const dt = LibCommon.formatDate(new Date(), 'YYYY-MM-DD');
  complete = dt;
  start_date = dt;
//console.log(complete);
}
onMount(async () => {
  try {
    const searchParams = new URLSearchParams(window.location.search);
    const idValue = searchParams.get('id') || "";
    console.log("idValue=", idValue);
    id = Number(idValue);
    startProc();
  } catch (e) {
    console.log(e);
  }
});

/**
*
* @param
*
* @return
*/
const save = async function() {
  try{
    errors = {};
    let values = Crud.getInputValues();
    console.log(values); 
    const validatedTodo = todoSchema.parse(values);
    console.log("#save.selected=", selected); 
    const resulte = await CrudCreate.addItem(Number(id), selected);
    console.log(resulte);
    //push(`/task_project_show?id=${id}`);
    location.href = `/task_project_show?id=${id}`;
  } catch (error) {
    console.error(error);
    if (error instanceof z.ZodError) {
			errors = error.errors.reduce((acc, curr) => {
				const field = curr.path[0];
				acc[field] = curr.message;
				return acc;
			}, {});
		}
    console.log(errors);
  }    
}
</script>

<!-- CSS -->
<style>
</style>

<!-- MarkUp -->
<div class="min-h-screen flex items-center justify-center bg-gray-100">
	<div class="bg-white p-8 rounded shadow-md w-full max-w-sm">
    <a class="btn-outline-blue" href={`/task_project_show?id=${id}`}
    >Back</a>
    <hr class="my-2" />
    <h1 class="text-3xl -font-bold">TaskCreate</h1>
    projectId: {id}
    <hr class="my-2" />
    <div class="col-md-9 form-group">
      <label class="fw-bold ">Title:
        <input type="text" name="title" id="title" 
        class="input_text" />
      </label>
      {#if errors.title}
			<p class="text-red-500 text-sm mt-1">{errors.title}</p>
			{/if}
    </div>
    <hr class="my-2" />
    <label>
        <input bind:group={selected} type="radio" name="amount" value={1} 
        class="form-check-input mx-2" />none
    </label>
    <label>
        <input bind:group={selected} type="radio" name="amount" value={2} 
        class="form-check-input mx-2" />working
    </label>
    <label>
        <input bind:group={selected} type="radio" name="amount" value={3} 
        class="form-check-input mx-2" />complete
    </label>
    <hr class="mt-2 mb-2" />
    <div class="col-md-6 form-group">
        <label class="col-sm-12">Start:
          <input type="date"  class="input_text"  id="start_date" name="start_date"                   
          value={start_date} required="required" />
        </label>
    </div>
    <hr class="mt-2 mb-2" />
    <div class="col-md-6 form-group">
        <label class="col-sm-12">End:
          <input type="date"  class="input_text"  id="complete" name="complete"                   
          value={complete} required="required" />        
        </label>
    </div>
    <hr />
    <div class="col-md-6 form-group">
        <label for="content">Content:</label>
        <textarea id="content" name="content" required 
        class="input_textarea"
        rows="10" placeholder=""></textarea>
    </div> 
    <button type="button" on:click={save} class="btn btn-primary my-2">[ Save ]</button>
  </div>
</div>

<!--
-->
