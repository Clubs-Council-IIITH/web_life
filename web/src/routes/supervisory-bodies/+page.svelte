<script lang="ts">
	// import { Avatar } from '@skeletonlabs/skeleton';
	// import { onMount } from 'svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="container h-full w-full mx-auto flex justify-center flex-col">
	<div class="flex flex-col">
		<br />
		<h2 class="h2">Student Affairs Committe (SAC)</h2>
		<br />
		<h3 style="margin-top:15px" class="h3">What do we do?</h3>
		<br />
		<p style="margin-top:15px">
			The purpose of the Student Affairs Committee is to promote and maintain the welfare of the
			student body and effective and desirable faculty-student relations. Its functions are to
			recommend policies and procedures as necessary and proper to accomplish its purpose and to
			develop the annual student activity budget as submitted to the Board.
		</p>
		<br />
		<h3 style="margin-top:15px;margin-bottom:10px" class="h3">Members</h3>
		<br />
		<div style="margin-top:10px" class="avatar-grid mx-4">
			{#each data.page_server_data.sac as member}
				<!-- <a href={'https://clubs.iiit.ac.in/profile/' + member.uid} target='_blank' class="w-full max-w-s rounded-lg card"> -->
				<div class="w-full max-w-s rounded-lg card">
					<br />
					<div style="margin: 15px" class="flex flex-col items-center pb-10">
						<img
							class="w-24 h-24 mb-3 rounded-full shadow-lg object-cover"
							src={member.imagesrc}
							alt={member.uid}
						/>
						<h5 class="mb-1 text-xl font-medium">{member.firstname + ' ' + member.lastname}</h5>
						<br />

						<!-- Roles and Years -->
						{#each member.roles as role}
							<div class="flex flex-col items-center">
								<p style="margin:5px" class="font-bold">{role.name}</p>
								<p style="margin-top:5px; font-size:14px" class="text-gray-500">
									( {role.startYear} - {role.endYear} )
								</p>
							</div>
						{/each}
					</div>
				</div>
				<!-- </a> -->
			{/each}
		</div>
		<br />
		<br />
		<h2 style="margin-top: 30px" class="h2">Student Life Committe (SLC)</h2>
		<br />
		<h3 style="margin-top:15px" class="h3">What do we do?</h3>
		<br />
		<p style="margin-top:15px">
			The Student Life Comittee is dedicated to enhancing the overall student experience and
			fostering a vibrant and inclusive campus community. We believe that student life is an
			integral part of a well-rounded education, and we strive to create opportunities for personal
			growth, leadership development, and meaningful connections among students.
			<br />
			Our committee consists of passionate student representatives who work closely with faculty, staff,
			and the wider student body to organize and coordinate a wide range of events, programs, and initiatives.
			From social gatherings and cultural celebrations to educational workshops and community service
			projects, we aim to provide diverse opportunities for students to explore their interests, build
			lasting friendships, and make a positive impact on campus.
		</p>
		<br />
		<h3 style="margin-top:15px;margin-bottom:15px" class="h3">Members</h3>
		<br />
		<div class="avatar-grid mx-4">
			{#each data.page_server_data.slc as member}
				<!-- <a
					href={'https://clubs.iiit.ac.in/profile/' + member.uid}
					target="_blank"
					class="w-full max-w-s rounded-lg card"
				> -->
				<div class="w-full max-w-s rounded-lg card">
					<br />
					<div style="margin:15px" class="flex flex-col items-center pb-10">
						<img
							class="w-24 h-24 mb-3 rounded-full shadow-lg object-cover"
							src={member.imagesrc}
							alt={member.uid}
						/>
						<h5 class="mb-1 text-xl font-medium">{member.firstname + ' ' + member.lastname}</h5>
						<br />

						<!-- Roles and Years -->
						{#each member.roles as role}
							<div class="flex flex-col items-center">
								<p style="margin:5px" class="font-bold">{role.name}</p>
								<p style="margin:5px; font-size:14px" class="text-gray-500">
									( {role.startYear} - {role.endYear} )
								</p>
							</div>
						{/each}
					</div>
				</div>
				<!-- </a> -->
			{/each}
		</div>
		<br />
		<h2 style="margin-top:30px" class="h2">Student Life Office (SLO)</h2>
		<br />
		<h3 style="margin-top:15px" class="h3">What do we do?</h3>
		<br />
		<p style="margin-top:15px">
			Our mission is to enhance student experience and foster excellence in the classroom and
			beyond.We provide programs, activities, and services that enhance the development of students
			intellectually, emotionally, culturally and physically within a co-curricular learning
			community.
			<br />
			The Student Life Office is ever willing to assist the student community and provide the necessary
			support to ensure that each student becomes engaged in campus life, develops habits of excellence
			and connects life outside the classroom to the formal academic curriculum.
		</p>
		<br />
		<h3 style="margin-top:15px;margin-bottom:15px" class="h3">Members</h3>
		<br />
		<div class="avatar-grid mx-4">
			{#each data.page_server_data.slo as member}
				<!-- <a
					href={'https://clubs.iiit.ac.in/profile/' + member.uid}
					target="_blank"
					class="w-full max-w-s rounded-lg card"
				> -->
				<div class="w-full max-w-s rounded-lg card">
					<br />
					<div style="margin:15px" class="flex flex-col items-center pb-10">
						<img
							class="w-24 h-24 mb-3 rounded-full shadow-lg object-cover"
							src={member.imagesrc}
							alt={member.uid}
						/>
						<h5 class="mb-1 text-xl font-medium">{member.firstname + ' ' + member.lastname}</h5>
						<br />

						<!-- Roles and Years -->
						{#each member.roles as role}
							<div class="flex flex-col items-center">
								<p style="margin:5px" class="font-bold">{role.name}</p>
								<p style="margin:5px; font-size:14px" class="text-gray-500">
									( {role.startYear} - {role.endYear} )
								</p>
							</div>
						{/each}
					</div>
				</div>
				<!-- </a> -->
			{/each}
		</div>
		<br />
	</div>
</div>
<br />
<br />
<br />

<style lang="postcss">
	@import '../../../static/styles/style.css';
	.avatar-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1rem;
		text-align: center;
	}
	.avatar-grid .card:hover {
		transition:
			background-color 0.3s ease,
			box-shadow 0.3s ease;
		background-color: #f3f4f6; /* Change the background color to highlight */
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow */
	}

	/* Dark mode hover effect */
	.dark .avatar-grid .card:hover {
		background-color: #374151; /* Change the background color for dark mode */
		box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.1); /* Add a subtle box shadow for dark mode */
	}
	.h2 {
		font-family: 'Georgia Bold';
		font-weight: normal;
		font-size: 42px;
	}
</style>
