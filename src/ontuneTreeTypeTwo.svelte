<script>
    import TreeView from './ontuneTreeTypeTwoComponent.svelte'
    

    let intCount = 0;
    const matCount = 100;
    let dcountData;
    
    // for(intCount=0; intCount<matCount; intCount++) {
    //    if(intCount === 0) {
    //     dcountData = {label: 'Linux"+ intCount + "'};
    //    } else {
    //     dcountData += {label: "Linux" + intCount + "};
    //    }
    // }

    

    

    let tree = {
        label: "VMHost", children: [            
            {label : "이렇게"},
            {label : "생성하면"},
            {label : "되는건데"},
            {label : "왜"},
            {label : "아니되는지?"}
        ]
    };

</script>
<p/>


<TreeView {tree} />
<!-- {console.log(tree)} -->