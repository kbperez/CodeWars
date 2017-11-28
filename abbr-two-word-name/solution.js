function abbrevName(name){
  let testname = name.split(" ");
  let firstInit = testname[0].charAt(0).toUpperCase();
  let lastInit = testname[1].charAt(0).toUpperCase();
  return `${firstInit}.${lastInit}`;

}
