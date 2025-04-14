<script lang="ts">
import { onMount } from 'svelte';
import TaskIndex from "./task_items/CrudIndex";
import HttpCommon from '../lib/HttpCommon';
//import ExportList from './task_project/export/ExportList';
import ExportGantt from './task_project/export/ExportGantt';

/** @type {import('./$types').PageData} */
export let id = 0;
let items: any[] = [], itemsNone = [], itemsWorking = [], itemsComplete = [];
let project = {name: ""};
  
/**
*
* @param
*
* @return
*/
const startProc= async function() {
  const searchParams = new URLSearchParams(window.location.search);
  const idValue = searchParams.get('id') || "";
  console.log("idValue=", idValue);
  id = Number(idValue);
  const target = await TaskIndex.getList(id);
  //console.log(target)
  items = target;
  let postItem: any = {
    "id": id
  }; 
  const res = await HttpCommon.post(postItem, '/project/get' );
  project = res.data;
  console.log(res.data)
  setStateArray();
  //console.log(items);
}

onMount(async () => {
  try {
    startProc();
  } catch (e) {
    console.log(e);
  }
});
//
const setStateArray = async function() {
    itemsNone = items.filter(item => (item.status === '1') );
//    console.log(itemsNone);
    itemsWorking = items.filter(item => (item.status === '2') );
//    console.log(itemsWorking);
    itemsComplete = items.filter(item => (item.status === '3') );
//    console.log(itemsComplete);
}
/**
*
* @param
*
* @return
*/
const exportExcel = async function () {
  try{
    const taskData = {
        itemsNone: itemsNone,
        itemsWorking: itemsWorking,
        itemsComplete: itemsComplete,
    };
    //await ExportList.exportXlsx(taskData, data);
  } catch (e) {
    console.error(e);
    throw new Error('Error , exportExcel');
  }
}

const exportGantt = async function () {
  try{
    await ExportGantt.out(items, null)
  } catch (e) {
      console.error(e);
      throw new Error('Error , exportGantt');
  }
}
</script>

<!-- CSS -->
<style>
</style>

<!-- MarkUp -->
<div class="container mx-auto px-4 py-4">
  <div class="row">
      <div class="col-md-6">
          <a href={`/task_project`} class="btn-outline-blue"
          >Back
          </a>
      </div>
      <div class="col-md-6 text-end">
      </div>
  </div>
  <hr class="my-2" />
  <h1 class="text-3xl">Export: {project.name}</h1>
  <span>ID: {id} </span>
  <hr class="my-1" />
  <div class="text-center">
      <button class="my-2 btn btn-primary" on:click={exportGantt}
      >Gantt</button>
  </div>   
  <hr class="my-1" />
</div>

<!--
-->
