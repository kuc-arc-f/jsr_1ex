import Crud from './Crud';
import HttpCommon from '../../lib/HttpCommon';
import LibAuth from '../../lib/LibAuth';

const CrudCreate = {

  /**
   *
   * @param key: any
   *
   * @return
   */
  addItem : async function(projectId: number, selected : number) : Promise<any>
  {
    try{
      let ret = false;
      let values = Crud.getInputValues();
      values.status = String(selected);
      values.projectId = projectId;
      values.userId = LibAuth.getUserId();
console.log(values);
      const res = await HttpCommon.post(values, '/tasks/create');
      //const res = await ApiUtil.post('/tasks/create', values);
      console.log(res.data);
      return res;
    } catch (e) {
      console.error("Error, addItem");
      console.error(e);
      throw new Error('Error , addItem');
    }
  },  
  /**
  * startProc
  * @param
  *
  * @return
  */   
  startProc :async function (): Promise<void> 
  {
    try{
      console.log("#startProc");
    } catch (e) {
      console.error(e);
    }    
  } 
}

export default CrudCreate;
