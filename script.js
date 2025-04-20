function toggleMode() {
    classlist = document.getElementsByTagName("body")[0].classList
    if (classlist.contains("light")) {
        //is lightmode so turn off lightmode
        classlist.remove("light")
        classlist.add("dark")
    }else if (classlist.contains("dark")) {
        //is darkmode so turn off darkmode
        classlist.remove("dark")
        classlist.add("light")
    }
}