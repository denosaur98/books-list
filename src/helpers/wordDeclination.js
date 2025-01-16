export default function wordDeclination(number, word) {
	const cases = [2, 0, 1, 1, 1, 2]
	const titles = {
		книга: ['книга', 'книги', 'книг'],
	}
	const index = number % 100 > 4 && number % 100 < 20 ? 2 : cases[Math.min(number % 10, 5)]
	return `${titles[word][index]}`
}
