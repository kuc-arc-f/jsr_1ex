<script lang="ts">
import LibCommon from '../../lib/LibCommon';
export let id, title, status, date, parentShowFunction;
let bg_status_color = "";

if(date) {
  date = LibCommon.converDateString(date);
} else {
  date = "";
}
//console.log("id=", id);
if(status === '2'){
    bg_status_color = "task_card_bg_blue";
}else if(status === '3'){
    bg_status_color = "task_card_bg_gray";
}
//
const showModal = function (id: number) {
console.log("showModal= ", id)
    parentShowFunction(id);
}
</script>

<!-- MarkUp -->
<div class="bg-white mb-2 rounded-lg">
    <div class="row justify-content-center p-0 task_index_row">
      <div class={`task_card_box card shadow-lg mb-0 ${bg_status_color}`}>
        <div class="card-body p-2">
          <div class="d-flex flex-column flex-md-row">
            <div class="card_col_body  p-md-0">
              <!-- <a href="#" on:click={showModal(id)}></a> -->
              <span class="task_title fs-5">{title}</span>
              <br />              
              <a href={`/task_item_edit?id=${id}`}
              ><span class="task_title mx-2">[Edit]</span>
              </a>
              <span>{date}, ID: {id}</span>
            </div>
          </div>
        </div>
      </div>
    </div>    
</div>

<style>
</style>

<!--
-->