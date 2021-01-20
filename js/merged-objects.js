function objConcat(args){
  let obj3 = {}
  
  args.forEach(( item ) => {
    Object.assign(obj3, item)
  })
  
  return obj3;
}