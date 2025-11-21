# ElevateLabs_Internship_Task6
ElevateLabs Internship - Task 6: Contact Form

Author: Shreya Dattatray Gaikwad 

---

Project Overview

A simple, accessible contact form built for the ElevateLabs internship (Task 6). 
The project demonstrates client-side form handling and validation using plain HTML, CSS, and JavaScript. 
Validation covers required fields, minimum lengths, and email format using a regular expression. 
No data is sent to a server — submission is simulated.


Features

- Clear, responsive layout and focused styles
  
- Client-side validation for Name, Email, and Message fields

- Regex-based email format check

- Inline error messages are displayed below each input

- Accessible feedback using `aria-live` and `aria-invalid`

- Focus management: the first invalid field receives focus

- Reset support that clears errors and UI state


Files in this repository

ElevateLabs_Internship_Task6/

├─ index.html         Contact form markup

├─ style.css          Visual styles and responsive rules

├─ script.js          Client-side validation and UI logic

└─ README.md          This file


How to run

1. Clone or download the repository.
   
2. Open `index.html` in a modern browser (Chrome recommended).

3. Fill the form and click Send Message to test validation behaviour.


Validation rules

Name: required, at least 2 characters

Email: required, must match a standard email regex

Message: required, at least 10 characters

On invalid input, descriptive error messages appear below the corresponding field, and the field shows an error style.


Accessibility notes

- Error messages are used `aria-live="polite"` so that screen readers announce changes.

- Inputs are received with `aria-invalid` when invalid.

- The script focuses on the first invalid field to help keyboard users.


Known limitations

- The email regex is a practical pattern suitable for this task; it is not a full RFC-compliant validator.
  
- No backend integration included (submission is simulated by design).


Social Links:

LinkedIn: [https://www.linkedin.com/in/shreya-gaikwad-2k4](https://www.linkedin.com/in/shreya-gaikwad-2k4)

GitHub: [https://github.com/ShreyaGaikwad2k4](https://github.com/ShreyaGaikwad2k4)

