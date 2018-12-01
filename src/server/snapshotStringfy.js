module.exports = (allSnapshots) => {
  return JSON
    .stringify(allSnapshots, function(k,v) {
      if(v instanceof Array) {
        return v.map(i => JSON.stringify(i));
      }
      
      return v;
    }, 2)
    .replace(/\"\[/g, "[")
    .replace(/\]\"/g, "]");
}
