function solution(numbers, left, right) {
	return numbers.map((num, index) => {
		for (let i = left; i <= right; i++) {
			const test = (index + 1) * i === num && left <= i <= right

			if (test || i === right) {
				return test
			}
		}
	})
}
