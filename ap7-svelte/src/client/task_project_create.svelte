<svelte:head>
	<title>Posts</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script lang="ts">
import { z } from "zod";
import Crud from './task_project/Crud';
import HttpCommon from '../lib/HttpCommon';
import {todoSchema} from './task_project/create/types';

/** @type {import('./$types').PageData} */
let errors: { [key: string]: string } = {};

/**
 *
 * @param
 *
 * @return
 */ 
 const startProc = async function () {
	try {
	} catch (e) {
      console.error(e);
    }	
}
if(typeof(window) !== "undefined"){
	startProc();
}
/**
 *
 * @param
 *
 * @return
 */ 
const addPost = async function () {
	try{
		errors = {};
		const values = Crud.getInputValues();
    console.log(values);
		const validatedTodo = todoSchema.parse(values);
		const res = await HttpCommon.post(values, '/project/create');
		console.log(res.data)
		//push(`/task_project`);
		location.href = `/task_project`;
	} catch (error) {
		console.log(error);
		if (error instanceof z.ZodError) {
			errors = error.errors.reduce((acc, curr) => {
				const field = curr.path[0];
				acc[field] = curr.message;
				return acc;
			}, {});
		}
		console.log(errors);
		alert("error, add");
	}
}
</script>

<!-- MarkUp -->
<div class="min-h-screen flex items-center justify-center bg-gray-100">
	<div class="bg-white p-8 rounded shadow-md w-full max-w-sm">
		<a href={`/task_project`} class="btn-outline-blue">Back
	  </a>
		<hr class="my-2" />
		<h1 class="text-3xl font-bold">Project Create</h1>
		<hr class="my-2" />
		<div class="col-md-6 form-group">
			<label for="name">Name</label>
			<input type="text" id="name" name="name" 
			class="input_text" required />
			{#if errors.name}
			<p class="text-red-500 text-sm mt-1">{errors.name}</p>
			{/if}
		</div>
		<hr class="mt-2 mb-2" />
		<button on:click={addPost} class="btn btn-primary my-2">Add</button>
		
	</div>
</div>

<!--
-->
