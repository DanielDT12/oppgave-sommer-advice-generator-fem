async function getAdvice() {
	try {
		const response = await fetch("https://api.adviceslip.com/advice");
		const adviceData = await response.json();
		if (!response.ok) {
			throw new Error("Network did not respond with 200");
		}

		displayAdvice(adviceData);
	} catch (error) {
		console.error("Error fetching data from API", error);
	}
}

function displayAdvice(adviceData) {
	const adviceNumber = document.querySelector("#js-advice-number");
	const adviceText = document.querySelector("#js-advice-text");

	adviceNumber.textContent = `Advice #${adviceData.slip.id}`;
	adviceText.textContent = `"${adviceData.slip.advice}"`;
}

getAdvice();

const adviceButton = document.querySelector("#js-advice-button");

adviceButton.addEventListener("click", getAdvice);
