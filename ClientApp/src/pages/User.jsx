import React, { useEffect } from 'react'
import { DataGrid } from 'devextreme-react'
import DataSource from 'devextreme/data/data_source'
import CustomStore from 'devextreme/data/custom_store'
import { Column, Editing, FilterRow } from 'devextreme-react/data-grid'
import { Paging } from 'devextreme-react/data-grid'


const User = () => {

  return (
    <div>
      <h2>
        User
      </h2>
      <DataGrid 
        dataSource={dataSource}
        remoteOperations={true}
      >
        <Editing 
          mode='row'
          allowAdding={true}
          allowDeleting={true}
        />
        <Column dataField='userId' caption='ID' width={50} allowEditing={false}/>
        <Column dataField='firstName'/>
        <Column dataField='lastName'/>
        <Column dataField='email'/>
        <Column dataField='birthDate' dataType='datetime' format={dateFormat}/>
        {/* <FilterRow visible={true}/> */}
        <Paging defaultPageSize={6}/>
      </DataGrid>
    </div>
  )
}

const dateFormat = { year: '2-digit', month: 'short', day: '2-digit' };

const dataSource = new CustomStore({
  key: 'userId',
  load: async (loadOptions) => {

    function isNotEmpty(value) {
      return value !== undefined && value !== null && value !== '';
    }

    let params = '?';
    [
      'skip',
      'take',
      'requireTotalCount',
      'requireGroupCount',
      'sort',
      'filter',
      'totalSummary',
      'group',
      'groupSummary',
    ].forEach((i) => {
      if (i in loadOptions && isNotEmpty(loadOptions[i])) { 
        params += `${i}=${JSON.stringify(loadOptions[i])}&`; 
      }
    });
    params = params.slice(0, -1);

    const response = await fetch(`user${params}`)
    const data = await response.json()
    
    return {
      data: data.data,
      totalCount: data.totalCount,
      groupCount: data.groupCount,
      summary: null
    }
  },
  insert: async (values) => {
    try {
      const response = await fetch('/user', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
      });
    } catch (error) {
        console.error('Error:', error);
    }
  },
  remove: async (key) => {
    try {
        const response = await fetch(`/user/${key}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });
    } catch (error) {
        console.error('Error:', error);
    }
  }
})


export default User
// const dataSource = createStore({
//   key: 'userId',
//   loadUrl: '/users',
//   loadParams: { orderID : 'userId'},
//   onBeforeSend: (method, ajaxOptions) => {
//     ajaxOptions.xhrFields = { withCredentials: true };
//   },
// })

// const dataSource = new CustomStore({
//   key: 'userId',
//   load: async (loadOptions) => {
//     const response = await fetch('user')
//     const data = await response.json()
//     return data;
//   },
//   insert: (values) => {
//       console.log(values);
//   },
//   update: (key, values) => {
//       console.log(values);
//   },
//   remove: (key) => {
//       console.log(key);
//   }
// });

// const dataSource = new ODataStore({
//   url: 'https://localhost:7273/odata/user',  
//   select: [
//     'UserId',
//     'UserName'
//   ],
//   key: ['UserId'],
//   keyType: {
//     UserId: 'Int32'
//   },
//   version: 4
// });
