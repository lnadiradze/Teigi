(() => {
    const inp = document.querySelector("input[name=username]");
    inp.style.visibility = 'hidden';
	inp.style['max-height'] = '0'
	inp.style['min-height'] = '0'
    const fg = document.querySelector("div.form-group");
    const selectElement = document.createElement("select");
	const options = ["Vaccination", "Spaying/Neutering", "Dental Care", "Parasite Control", "admin"];
    options.forEach(function(optionText) {
        var option = document.createElement("option");
        option.textContent = optionText;
        selectElement.appendChild(option);
    });
    fg.appendChild(selectElement);
	selectElement.addEventListener("change", (e) => { inp.value = e.target.value })
})()
