<template>
	<div class="mediabox">
		<figure>
			<picture>
				<source :data-lowsrc="image.lqip" :type="type">
				<source :data-srcset="image.webp" type="image/webp">
				<source :data-srcset="image.src" :type="type">
				<img
					:alt="alt"
					:src="image.lqip"
					:data-src="image.src"
					class="mediabox-img lazyload"
				>
			</picture>
		</figure>
	</div>
</template>

<script>
	export default {
		name: 'LazyImage',
		props: {
			src: {
				required: true,
				type: String,
			},
			alt: {
				required: true,
				type: String,
			},
			type: {
				required: true,
				type: String,
			},
		},
		computed: {
			image() {
				return {
					src: require(`~/assets/images/${this.src}`),
					lqip: require(`~/assets/images/${this.src}?lqip`),
					webp: require(`~/assets/images/${this.src}?webp`),
				};
			},
		},
	};
</script>

<style lang="scss" scoped>
	.mediabox {
		position: relative;
		display: block;
		height: 0;
		width: 100%;
		padding-bottom: 66.6667%;
	}

	.mediabox-img.ls-blur-up-is-loading,
	.mediabox-img.lazyload:not([src]) {
		visibility: hidden;
	}

	.ls-blur-up-img,
	.mediabox-img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: block;
		object-fit: contain;
	}

	.ls-blur-up-img {
		filter: blur(10px);
		opacity: 1;
		transition: opacity 1000ms, filter 1500ms;
	}

	.ls-blur-up-img.ls-inview.ls-original-loaded {
		opacity: 0;
		filter: blur(25px);
	}
</style>
