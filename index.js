class Image {
	constructor(src, bgPosition) {
		this.src = src
		this.bgPosition = bgPosition
	}
}

class Album {
	constructor(name) {
		this.name = name
		this.images = []
	}

	addImages = (images, album = '') => {
		images.forEach(([image, bgPosition]) => {
			let src = album ? `media/${album}/${image}` : `media/${image}`

			let imageObj = new Image(src, bgPosition || '')

			this.images.push(imageObj)
		})

		return this
	}
}

const albumNames = [
	'Taylor Swift',
	'Fearless',
	'Speak Now',
	'Red',
	'1989',
	'Reputation',
	'Lover',
	'Folklore',
	'Evermore',
	"Fearless (Taylor's Version)",
	"Red (Taylor's Version)",
]

const albums = [
	new Album('Taylor Swift').addImages([['taylor_swift.jpg']], ''),
	new Album('Fearless').addImages(
		[['1.jpg'], ['2.jpg', 'center 80%'], ['3.jpeg']],
		'fearless'
	),
	new Album('Speak Now').addImages(
		[['1.jpg'], ['2.jpg'], ['3.jpg']],
		'speak_now'
	),
	new Album('Red').addImages(
		[['1.jpg'], ['2.jpg'], ['3.jpg', 'center']],
		'red'
	),
	new Album('1989').addImages([['1989.jpeg']], ''),
	new Album('Reputation').addImages(
		[['1.jpg'], ['2.jpg'], ['3.jpg']],
		'reputation'
	),
	new Album('Lover').addImages(
		[['1.jpg'], ['2.jpg', 'center bottom'], ['3.jpg', 'center']],
		'lover'
	),
	new Album('folklore').addImages(
		[
			['1.jpg', 'center bottom'],
			['2.jpg', 'center'],
			['3.jpg', 'center bottom'],
		],
		'folklore'
	),
	new Album('Evermore').addImages(
		[['1.jpg', 'center'], ['2.jpg'], ['3.jpg']],
		'evermore'
	),
	new Album("Fearless (taylor's version)").addImages(
		[['fearlesstv.jpg', 'center 70%']],
		''
	),
	new Album("Red (taylor's version)").addImages(
		[['redtv.jpg', 'center bottom']],
		''
	),
]

const fullPage = document.getElementById('fullpage')

const createSlides = images =>
	images.map(image => {
		const slide = document.createElement('div')
		slide.classList.add('slide')
		slide.style.backgroundImage = `url(${image.src})`
		slide.style.backgroundPosition = image.bgPosition

		return slide
	})

const createSection = album => {
	const section = document.createElement('section')
	section.classList.add('section')

	const slides = createSlides(album.images)

	slides.forEach(slide => section.appendChild(slide))

	const title = document.createElement('h1')
	title.classList.add('title')
	title.innerText = album.name

	section.appendChild(title)

	return section
}

albums.forEach(album => {
	const section = createSection(album)

	fullPage.appendChild(section)
})

new fullpage('#fullpage', {
	// scrollBar: true,
	navigation: true,
	navigationPosition: 'right',
	loopHorizontal: true,
	showActiveTooltip: true,
	navigationTooltips: albumNames,
})
