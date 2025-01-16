export default function yearMask(event) {
	const input = event.target
	let value = input.value
	value = value.replace(/\D/g, '')
	if (value.length > 4) {
		value = value.slice(0, 4)
	}
	const maxYear = new Date().getFullYear()
	if (value.length === 4) {
		const year = parseInt(value, 10)
		if (year > maxYear) {
			value = maxYear.toString()
		}
	}
	input.value = value
}
