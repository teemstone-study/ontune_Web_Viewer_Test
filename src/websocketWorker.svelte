<script>
    import { WebReceiveData, Mosaic_Arr, Data_Infos} from './store.js';
    import { writable, get } from 'svelte/store';
  import { onMount } from 'svelte';

  let Socket;
    onMount(() => {
        console.log('workerInit');
        console.log('Add worker');
        Socket = new WebSocket('ws://192.168.0.24:3001/ws');

        Socket.addEventListener('open', () => {
            console.log("It's open");

            let tmp_flag = 0;

            // $:{
            //     console.log($Data_Infos.LASTPERF_CODE);
            //     if ($Data_Infos.LASTPERF_CODE != null)
            //     {

            //         $Data_Infos.LASTPERF_CODE.Flag_YN == true ? tmp_flag + $Data_Infos.LASTPERF_CODE.Code:tmp_flag + 0;
            //         $Data_Infos.BASIC_CODE.Flag_YN == true ? tmp_flag + $Data_Infos.BASIC_CODE.Code:tmp_flag + 0;
            //         $Data_Infos.CPU_CODE.Flag_YN == true ? tmp_flag + $Data_Infos.CPU_CODE.Code:tmp_flag + 0;
            //         $Data_Infos.MEM_CODE.Flag_YN == true ? tmp_flag + $Data_Infos.MEM_CODE.Code:tmp_flag + 0;
            //         $Data_Infos.NET_CODE.Flag_YN == true ? tmp_flag + $Data_Infos.NET_CODE.Code:tmp_flag + 0;                                               
                    
            //         tmp_flag += 2;
            //         console.log(tmp_flag);
            //         sendDataKey(tmp_flag);
            //     }
            //     else 
            //     {
            //         console.log(2);
            //         sendDataKey(2);
            //     }  
            // }
            sendDataKey(2);
            
        });
        Socket.addEventListener('message', function (event) {
            let Parsedata = JSON.parse(event.data);
            // console.log(Parsedata.code);
            // console.log("================================");
            // console.log($Mosaic_Arr);
            // console.log($Data_Infos);
            
            // Parsedata.

            switch(Parsedata.code) {
                case 2:
                    WebReceiveData.set({code : Parsedata.code, data : Parsedata.data});
            }


	    });
        console.log('UpdateEnd worker');
    })

    const sendMessage = (message) => {
        if (Socket.readyState <= 1) {
            Socket.send(message);
        }
    }

    function sendDataKey(key) {
        var datakey = {
            code: 0x00000001,
            key: key,
          };
          Socket.send(JSON.stringify(datakey));
		console.log("openSend");
    }

    export function NewSend() {
        var datakey = {
            code: 0x00000001,
            key: 0x00000005,
          };
          Socket.send(JSON.stringify(datakey));
		console.log("openSend2");
    }

    // socket.onopen = function (_, et) {
    //     console.log("open");
    //     sendDataKey(1 + Math.floor(Math.random() * 126));
    // }

    // let workEvent = new Worker('ontuneTreeListMaker.js');
    // workEvent.onmessage = updateItemList;
    // workEvent.postMessage("init");
	

    function updateItemList(e) {
        console.log("GetData : " + e);
        //ReceiveData.set(e.data);
    }
    // if ('werviceWorker' in navigator) {
    //     console.log('Add worker');
    //     this.navigator.serviceWorker.register('./dataRecever.js');
    // }

</script>