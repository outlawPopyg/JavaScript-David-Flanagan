/* Класс Histogram представляет собой расширинный класс Set.
Расширение заключается в том, что помимо ключа он хранит
и кол-во добавлений этого ключа. И удаление ключа происходит
в том случае, если счетчик равен нулю */

class Histogram {
	constructor() { this.map = new Map(); }

	count(key) {
		return this.map.get(key) || 0;
	}

	has(key) {
		return this.count(key) > 0;
	}

	get size() { return this.map.size; }

	add(key) {
		this.map.set(key, this.count(key) + 1);
	}

	delete(key) {
		let count = this.count(key);
		if (count === 1) {
			this.map.delete(key);
		} else if (count > 1) {
			this.map.set(key, count - 1);
		}
	}

	[Symbol.iterator]() {
		return this.keys();
	}

	toString() {
		return [...this.entries()]
	}

	keys() { return this.map.keys(); }
	values() { return this.map.values(); }
	entries() { return this.map.entries(); }
}


const a = new Histogram();
a.add('Kalim');
a.add('Bogdan');
a.add('Grigor');

a.add('Kalim');
console.log(a.entries()) // => {"Kalim" => 2, "Bogdan" => 1, "Grigor" => 1}