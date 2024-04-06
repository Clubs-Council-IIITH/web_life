<script lang="ts">
	import type { PageData } from './$types';
	import { Avatar } from '@skeletonlabs/skeleton';
	let currentVariant = 'bg-initial';
	let studentBodies = [
		{
			name: 'Apex Council',
			img: 'https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3D9fF29BSa2X32R7twpuuNhk_IMG-20230806-WA0045.jpg&w=1920&q=75',
			link: 'https://clubs.iiit.ac.in/student-bodies/apex'
		},
		{
			name: 'Campus Life Council',
			img: 'https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3DMKdEbZPyYZYKN64YRDzXfa_campuslife.jpg&w=1920&q=75',
			link: 'https://clubs.iiit.ac.in/student-bodies/campuslife'
		},
		{
			name: 'Clubs Council',
			img: 'https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Fnginx%2Fstatic%2Fimg%2Fcc-banner.png&w=1920&q=75',
			link: 'https://clubs.iiit.ac.in/about/clubs-council'
		},
		{
			name: 'Cultural Council',
			img: 'https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3DYxDWrXZFVScPpu8xG9HdUr_cultural.jpg&w=1920&q=75',
			link: 'https://clubs.iiit.ac.in/student-bodies/cultural'
		},
		{
			name: 'Election Commission',
			img: 'https://clubs.iiit.ac.in/_next/image?url=https%3A%2F%2Fpicsum.photos%2Fseed%2FRWxlY3Rpb24gQ29tbWlzc2lvbg%3D%3D%2F640%2F480%3Fblur%3D1&w=1920&q=75',
			link: 'https://clubs.iiit.ac.in/student-bodies/ec'
		},
		{
			name: 'Entrepreneurship Cell',
			img: 'https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3D9bTgXeTfF9cGg7ktxZJ7qC_ecell.jpg&w=1920&q=75',
			link: 'https://clubs.iiit.ac.in/student-bodies/ecell'
		},
		{
			name: 'Felicity Taskforce',
			img: 'https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3Dnu95aqwwxLjCLUMEHJgAvE_felicity.png&w=1920&q=75',
			link: 'https://clubs.iiit.ac.in/student-bodies/felicity'
		},
		{
			name: 'Finance Council',
			img: 'https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3DLsLEvsHYeGuiWat9YrjS8d_finance_council.jpg&w=1920&q=75',
			link: 'https://clubs.iiit.ac.in/student-bodies/finance_council'
		},
		{
			name: 'National Service Scheme',
			img: 'https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3DML3kDN99tZc3W3WbVyR7sw_nss.jpg&w=256&q=75',
			link: 'https://clubs.iiit.ac.in/student-bodies/nss'
		},
		{
			name: 'Placement Cell',
			img: 'https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3D8NVvvDpH3momm2ZwFYgVkZ_spc.jpg&w=1920&q=75',
			link: 'https://clubs.iiit.ac.in/student-bodies/placements.head'
		},
		{
			name: 'Sports Council',
			img: 'https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3D86GiXyaUwhXXCCedRjAHcX_Screenshot_2024-02-21_at_7.41.46_AM.png&w=1920&q=75',
			link: 'https://clubs.iiit.ac.in/student-bodies/sports_secretary'
		},
		{
			name: 'Student Alumni Connect Cell',
			img: 'https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3DPMfyEgDUJzScwwoE7bddbZ_sacc.png&w=1920&q=75',
			link: 'https://clubs.iiit.ac.in/student-bodies/sacc'
		},
		{
			name: 'Student Parliament',
			img: 'https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3DGrjF288jkebDVdS8LqqiAU_parliament.png&w=1920&q=75',
			link: 'https://clubs.iiit.ac.in/student-bodies/parliament'
		}
	];

	export let data: PageData;
</script>

<!-- <pre>{JSON.stringify(data.page_server_data, null, 2)}</pre> -->
<div class="container h-full w-full mx-auto flex justify-center items-center flex-col">
	<div class="text-center flex flex-col items-center">
		<h2 class="h2">Student Bodies</h2>
	</div>
	<div class="card-grid">
		{#each data.page_server_data.clubs as studentbody}
			<a
				class="card {currentVariant} card-hover overflow-hidden size"
				href={'https://clubs.iiit.ac.in/student-bodies/' + studentbody.cid}
				target="_blank"
			>
				<header>
					<img src={studentbody.banner} class="bg-black/50 w-full aspect-[21/9]" alt="Post" />
				</header>
				<div class="p-4 space-y-4">
					<h3 class="h3" data-toc-ignore>{studentbody.name}</h3>
					<article>
						<p>
							<!-- cspell:disable -->
							{#if studentbody.tagline != null}
								{studentbody.tagline}
							{/if}
							<!-- cspell:enable -->
						</p>
					</article>
				</div>
				<hr class="opacity-50" />
				<Avatar src={studentbody.logo} width="w-8" />
			</a>
		{/each}
	</div>
</div>

<style lang="postcss">
	.size {
		width: 300px;
		height: 500px;
	}
	.card-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 100px;
		width: 100%;
	}
</style>
