/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    AKAI Frontend Task - Javascript
    W tym zadaniu postaraj się zaimplementować metody, które sprawdzą, czy dane wprowadzone
    do formularza są poprawne. Przykładowo: czy imię i nazwisko zostało wprowadzone.
    Możesz rozwinąć walidację danych tak bardzo, jak tylko zapragniesz.
    Powodzenia!
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

	function sprawdz(){
	
	var form = document.querySelector('#form');
	var name = document.getElementById('first_name').value;
	var last_name = document.getElementById('last_name').value;
	var email = document.getElementById('email').value;
	var div = document.getElementById('form_message');
	
	
	
	const checkboxes = form.querySelectorAll('input[type=checkbox]');
    const checkboxLength = checkboxes.length;
    const firstCheckbox = checkboxLength > 0 ? checkboxes[0] : null;
	
	function init() {
        if (firstCheckbox) {
            for (let i = 0; i < checkboxLength; i++) {
                checkboxes[i].addEventListener('change', checkValidity);
            }

            checkValidity();
        }
    }

    function isChecked() {
        for (let i = 0; i < checkboxLength; i++) {
            if (checkboxes[i].checked) return true;
        }

        return false;
    }

    function checkValidity() {
        const errorMessage = !isChecked() ? 'Musisz zaznaczyć przynajmniej jedną opcję' : '';
        firstCheckbox.setCustomValidity(errorMessage);
    }

    init();

	let formErrors = [];

	form.addEventListener("submit", e => {
    e.preventDefault();
	
	
	if ((name=='')){
		formErrors.push('Podaj brakujące imię');
	}
	
	if (last_name==''){
	formErrors.push('Podaj brakujące nazwisko');
	}
	
	const reg = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;
    if (!reg.test(email)) {
        formErrors.push("Wypełnij poprawnie pole z emailem");
    }
	
	if (!formErrors.length) {
	e.target.submit();

	 } else {
	 div.innerHTML = `
            <p class="form-error-list">
                ${formErrors.map(el => `${el}<br />`).join("")}
            </p>
        `;
    }
	

	})
	}