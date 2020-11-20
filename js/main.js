function showDayOfWeek() {
    let arrayWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let counter;
    let i = 0;
    while (true) {
        let counter = i % 7;
        i++;
        alert(`It is ${arrayWeek[counter]}. Do you want to know what is the next day?`); 
    }
}
