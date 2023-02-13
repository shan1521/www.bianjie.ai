<template>
	<div class="pdf_container">
		<!-- todo shan 还需要更新一下文件 -->
		<iframe :src="$withBase('/Bianjie.ai_brochure.pdf')" width="99.8%" height="99%"></iframe>
	</div>
</template>

<script>
	export default {
		name: "DownloadLayout"
	}
</script>

<style scoped lang="stylus">
	.pdf_container{
		width: 100%;
		height: 100%;
		position: absolute;
		top:0;
		left:0;
		bottom:0;
		right:0;
	}
</style>
