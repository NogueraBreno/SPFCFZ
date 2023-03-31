function focoinput {
savevalue = this.value;
onfocusin = "this.value=''"
onfocusout = "this.value='this.savevalue'";
}