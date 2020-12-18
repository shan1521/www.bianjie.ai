<template>
	<div class="pfd_container">
		<iframe src="public/Bianjie.ai_brochure.pdf" width="99.9%" height="99%"></iframe>
	</div>
</template>

<script>
	import * as PDF from "pdfjs-dist"
	PDF.GlobalWorkerOptions.workerSrc = 'pdfjs-dist/build/pdf.worker.js'
	export default {
		data () {
			return {
			
			}
		},
		mounted(){
			this.$store.commit('flShowHeaderAndFooter',false)
		}
	}
</script>

<style scoped lang="less">
	.pfd_container{
		width: 100%;
		height: 100%;
		position: absolute;
		top:0px;
		left:0;
		bottom:0;
		right:0;
	}
</style>
