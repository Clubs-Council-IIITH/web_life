<script lang="ts">
	import { onMount } from 'svelte';
    import { Avatar } from '@skeletonlabs/skeleton';
	type ImageKey = keyof typeof images;
	type ImageLinkArgs = {
		/** Image ID */
		id: ImageKey;
		/** Image Height */
		h: number;
		/** Image Width */
		w: number;
		/** Adds the fit=max query param */
		max?: boolean;
	};
	function getImageLink({ id, h, w, max }: ImageLinkArgs): string {
		const path = images[id].raw;
		return `${path}&w=${w}&h=${h}&auto=format&fit=${max ? 'max' : 'crop'}`;
	}
	const images = {
		YOErFW8AfkI: {
			raw: 'https://images.unsplash.com/photo-1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3'
		},
		z_X0PxmBuIQ: {
			raw: 'https://images.unsplash.com/photo-1510111652602-195fc654aa83?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY0Nzl8&ixlib=rb-4.0.3'
		},
		'8vKVlNIbAc4': {
			raw: 'https://images.unsplash.com/photo-1617296537916-291a105cd2f4?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY1MTl8&ixlib=rb-4.0.3'
		},
		vjUokUWbFOs: {
			raw: 'https://images.unsplash.com/photo-1620562303747-ba21ca6f1530?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2MjR8&ixlib=rb-4.0.3'
		},
		s0fXOuyTH1M: {
			raw: 'https://images.unsplash.com/photo-1597077962467-be16edcc6a43?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2MzZ8&ixlib=rb-4.0.3'
		},
		CKZQ6g_FB2Q: {
			raw: 'https://images.unsplash.com/photo-1553184570-557b84a3a308?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2NTF8&ixlib=rb-4.0.3'
		},
		VYuJLsF4XQQ: {
			raw: 'https://images.unsplash.com/photo-1509130446053-899ae7358ce6?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2NjF8&ixlib=rb-4.0.3'
		},
		'01D-_OtB8wQ': {
			raw: 'https://images.unsplash.com/photo-1620005839871-7ac4aed5ddbc?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2NzN8&ixlib=rb-4.0.3'
		},
		eP2zYflRoNY: {
			raw: 'https://images.unsplash.com/photo-1597531072931-8fceba101e4e?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2OTB8&ixlib=rb-4.0.3'
		},
		'1SEH8qv-Obo': {
			raw: 'https://images.unsplash.com/photo-1612145342709-eadb6e22acca?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3MDh8&ixlib=rb-4.0.3'
		},
		'c64AB11j-po': {
			raw: 'https://images.unsplash.com/photo-1597077917598-97ca3922a317?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3MjF8&ixlib=rb-4.0.3'
		},
		tQ4fEcKfB1g: {
			raw: 'https://images.unsplash.com/photo-1591775161903-497839a443c1?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3MzR8&ixlib=rb-4.0.3'
		},
		SMvOSlgThHA: {
			raw: 'https://images.unsplash.com/photo-1617296539691-67feaadf389e?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3NjF8&ixlib=rb-4.0.3'
		},
		azE50UpJDP0: {
			raw: 'https://images.unsplash.com/photo-1542835435-4fa357baa00b?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3NzN8&ixlib=rb-4.0.3'
		},
		'UhE2lwGn-DQ': {
			raw: 'https://images.unsplash.com/photo-1603855873822-0931a843ee3a?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3ODJ8&ixlib=rb-4.0.3'
		},
		'twVS-YjQn9Y': {
			raw: 'https://images.unsplash.com/photo-1508931133503-b1944a4ecdd5?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3OTV8&ixlib=rb-4.0.3'
		},
		EkW1r_eDjRs: {
			raw: 'https://images.unsplash.com/photo-1633053663400-655b31fb88ac?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY4MDV8&ixlib=rb-4.0.3'
		},
		'QDc-OQU9hFk': {
			raw: 'https://images.unsplash.com/photo-1578170222009-c7893aa20afd?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY4MTZ8&ixlib=rb-4.0.3'
		},
		QK_VtGYQV_U: {
			raw: 'https://images.unsplash.com/photo-1610220941077-1ec123e7c043?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY4NjV8&ixlib=rb-4.0.3'
		},
		'3vj6GJ_lTa8': {
			raw: 'https://images.unsplash.com/photo-1605055618128-b2db3f874a0c?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY4Nzh8&ixlib=rb-4.0.3'
		},
		C5NOq1BKlAk: {
			raw: 'https://images.unsplash.com/photo-1502768040783-423da5fd5fa0?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY4ODd8&ixlib=rb-4.0.3'
		},
		'wzj86-5JVcM': {
			raw: 'https://images.unsplash.com/photo-1423110041833-0d5dfcc552e1?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY4OTl8&ixlib=rb-4.0.3'
		},
		hTv8aaPziOQ: {
			raw: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY5MzR8&ixlib=rb-4.0.3'
		}
	};
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
    ]
</script>

<div class="container h-full w-full mx-auto flex justify-center items-center flex-col">
	<div class="text-center flex flex-col items-center">
		<h2 class="h2">Student Bodies</h2>
	</div>
	<div class="card-grid">
        {#each studentBodies as studentbody}
            <a class="card {currentVariant} card-hover overflow-hidden size" href={studentbody.link} target="_blank">
                <header>
                    <img
                        src={studentbody.img}
                        class="bg-black/50 w-full aspect-[21/9]"
                        alt="Post"
                    />
                </header>
                <div class="p-4 space-y-4">
                    <h3 class="h3" data-toc-ignore>{studentbody.name}</h3>
                    <article>
                        <p>
                            <!-- cspell:disable -->
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident eveniet
                            eligendi cumque consequatur tempore sint nisi sapiente. Iste beatae laboriosam iure molestias
                            cum expedita architecto itaque quae rem.
                            <!-- cspell:enable -->
                        </p>
                    </article>
                </div>
                <hr class="opacity-50" />
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
        width: 100%
    }
</style>
