<script>
  import { WebReceiveData, Mosaic_Arr, Data_Infos, WebReceivePieData, WebSendData} from './store.js';
  import { writable, get } from 'svelte/store';
  import { onDestroy, onMount } from 'svelte';
  import { load_Key_Flag } from './uStore_Function.js';


  let workEvent;
    onMount(() => {
        console.log('workerInit');
        let workEvent = new Worker('dataRecever.js');
        workEvent.onmessage = updateItemList;
        WebSendData.subscribe((value) => {
            if (Number.isInteger(value))
            {
                workEvent.postMessage(value);
            }
        });

        Data_Infos.subscribe((Item) => {
        console.log("items ~~~~~~~~~~~");
        console.log(Item);
        // console.log(get(Data_Infos));

        if (Item.BASIC_CODE != null) {
            console.log("=============load Key Flag S ============");

            let tmp_Flag = 2;

            console.log(Item.LASTPERF_CODE.Flag_YN);
            console.log(Item.LASTPERF_CODE.Code);

            tmp_Flag += Item.LASTPERF_CODE.Flag_YN === true ? Item.LASTPERF_CODE.Code:0;
            tmp_Flag += Item.BASIC_CODE.Flag_YN    === true ? Item.BASIC_CODE.Code:0;
            tmp_Flag += Item.CPU_CODE.Flag_YN      === true ? Item.CPU_CODE.Code:0;
            tmp_Flag += Item.MEM_CODE.Flag_YN      === true ? Item.MEM_CODE.Code:0;
            tmp_Flag += Item.NET_CODE.Flag_YN      === true ? Item.NET_CODE.Code:0;
            tmp_Flag += Item.DISK_CODE.Flag_YN     === true ? Item.DISK_CODE.Code:0;

            console.log(tmp_Flag);
            console.log("=============load Key Flag E ============");

            // console.log("==============Flag Change and Send Data===========");
            if (tmp_Flag > 2) {
                workEvent.postMessage(tmp_Flag);
            };
        };
        });
        
        console.log('Add worker');
    })
    function updateItemList(e) {
        try {
            let Parsedata = JSON.parse(e.data);
            switch(Parsedata.code) {
            case 2:
                WebReceiveData.set({code : Parsedata.code, data : Parsedata.data});
                break;
            case 4:
                let arrayData = String(Parsedata.data).split(",");
                let num1 = Number(arrayData[3]);
                let num2 = Number(arrayData[4]);
                WebReceivePieData.set({value1: num1,value2: num2});
                break;
        }
        }
        catch(e) {
            console.log(e);
            return;
        }
        
    }
</script>