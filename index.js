function bouncer(arr) {
    var tru = [];
   
     return arr.filter(function(elem){ 
       return elem;
   
   });
   }
   bouncer([7, "ate", "", false, 9]);

   function chunkArrayInGroups(arr, size) {

    var group = [];
    while (arr.length > 0) {
      group.push(arr.slice(0, size));
      arr = arr.slice(size);
    }
  
    return group;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);