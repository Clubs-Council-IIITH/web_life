import { c as create_ssr_component, j as compute_rest_props, e as escape, k as spread, l as escape_attribute_value, n as escape_object, a as add_attribute, i as each, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/ProgressBar.svelte_svelte_type_style_lang.js";
let cBase = "flex aspect-square text-surface-50 font-semibold justify-center items-center overflow-hidden isolate";
let cImage = "w-full object-cover";
const Avatar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let $$restProps = compute_rest_props($$props, [
    "initials",
    "fill",
    "fontSize",
    "src",
    "fallback",
    "action",
    "actionParams",
    "background",
    "width",
    "border",
    "rounded",
    "shadow",
    "cursor"
  ]);
  let { initials = "AB" } = $$props;
  let { fill = "fill-token" } = $$props;
  let { fontSize = 150 } = $$props;
  let { src = "" } = $$props;
  let { fallback = "" } = $$props;
  let { action = () => {
  } } = $$props;
  let { actionParams = "" } = $$props;
  let { background = "bg-surface-400-500-token" } = $$props;
  let { width = "w-16" } = $$props;
  let { border = "" } = $$props;
  let { rounded = "rounded-full" } = $$props;
  let { shadow = "" } = $$props;
  let { cursor = "" } = $$props;
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  if ($$props.initials === void 0 && $$bindings.initials && initials !== void 0)
    $$bindings.initials(initials);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  if ($$props.fontSize === void 0 && $$bindings.fontSize && fontSize !== void 0)
    $$bindings.fontSize(fontSize);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.fallback === void 0 && $$bindings.fallback && fallback !== void 0)
    $$bindings.fallback(fallback);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.actionParams === void 0 && $$bindings.actionParams && actionParams !== void 0)
    $$bindings.actionParams(actionParams);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.cursor === void 0 && $$bindings.cursor && cursor !== void 0)
    $$bindings.cursor(cursor);
  classesBase = `${cBase} ${background} ${width} ${border} ${rounded} ${shadow} ${cursor} ${$$props.class ?? ""}`;
  return `  <figure class="${"avatar " + escape(classesBase, true)}" data-testid="avatar">${src ? `<img${spread(
    [
      {
        class: "avatar-image " + escape(cImage, true)
      },
      {
        style: escape_attribute_value($$props.style ?? "")
      },
      { src: escape_attribute_value(src) },
      {
        alt: escape_attribute_value($$props.alt || "")
      },
      escape_object(prunedRestProps())
    ],
    {}
  )}>` : `<svg class="avatar-initials w-full h-full" viewBox="0 0 512 512"><text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-weight="bold"${add_attribute("font-size", fontSize, 0)} class="${"avatar-text " + escape(fill, true)}">${escape(String(initials).substring(0, 2).toUpperCase())}</text></svg>`}</figure>`;
});
const css = {
  code: ".avatar-grid.svelte-7v0h0y{display:grid;grid-template-columns:repeat(auto-fill, minmax(200px, 1fr));gap:1rem;text-align:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let sacMembers = [
    {
      uid: "radhika.mamidi",
      name: "Radhika Mamidi",
      img: "https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3DcoSNu725F37yRao3p477xM_radhika.mamidi.jpg&w=1080&q=75",
      positions: [
        {
          pos: "Student Affairs Committee Chair",
          years: "2021-present"
        }
      ]
    },
    {
      uid: "tapan.sau",
      name: "Tapan Sau",
      img: "https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3D6RPGaYhvNDfG4JshstTZF6_tapan.sau.jpg&w=1080&q=75",
      positions: [
        {
          pos: "Student Life Committee Chair",
          years: "2021-present"
        },
        {
          pos: "Anti-Ragging Committee Chair",
          years: "2018-present"
        }
      ]
    },
    {
      uid: "priyanka.srivastava",
      name: "Priyanka Srivastava",
      img: "https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3DmvTng5J29NFDUcFj95aj3j_priyanka.srivastava.jpg&w=1080&q=75",
      positions: [
        {
          pos: "Mental Health Coordinator",
          years: "2023-present"
        }
      ]
    },
    {
      uid: "vinod.pk",
      name: "Vinod Pallakad",
      img: "https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3DBr4XwM4gBkJpLpeqPbjxeX_vinod.pk.jpg&w=1080&q=75",
      positions: [
        {
          pos: "Sports Chair",
          years: "2020-present"
        }
      ]
    },
    {
      uid: "ashamn",
      name: "Asham M N",
      img: "https://avatar.iran.liara.run/public",
      positions: [
        {
          pos: "Council of Wardens Chair",
          years: "2023-present"
        }
      ]
    },
    {
      uid: "radhika.krishnan",
      name: "Radhika Krishnan",
      img: "https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3D4EFtOczGGdX9t2nE2zk0tn0A_radhika.krishnan.jpeg&w=1080&q=75",
      positions: [
        {
          pos: "Mess Committee Chair",
          years: "2021-present"
        }
      ]
    },
    {
      uid: "prabhakar",
      name: "Prabhakar M",
      img: "https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3DTW7T3LrHjbyyDtHPHNztiq_prabhakar.jpg&w=1080&q=75",
      positions: [{ pos: "SLO Head", years: "2019-present" }]
    }
  ];
  let slcMembers = [
    {
      uid: "tapan.sau",
      name: "Tapan Sau",
      img: "https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3D6RPGaYhvNDfG4JshstTZF6_tapan.sau.jpg&w=1080&q=75",
      positions: [
        {
          pos: "Student Life Committee Chair",
          years: "2021-present"
        }
      ]
    },
    {
      uid: "radhika.mamidi",
      name: "Radhika Mamidi",
      img: "https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3DcoSNu725F37yRao3p477xM_radhika.mamidi.jpg&w=1080&q=75",
      positions: [
        {
          pos: "Student Affairs Committee Chair",
          years: "2021-present"
        }
      ]
    },
    {
      uid: "indranil.chakraborty",
      name: "Indranil Chakraborty",
      img: "https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3D8C92ohv2FnZQF5k32euBB7_indranil.chakrabarty.jpg&w=1080&q=75",
      positions: [
        {
          pos: "Cultural Coordinator",
          years: "2021-present"
        }
      ]
    },
    {
      uid: "subhadip.mitra",
      name: "Subhadip Mitra",
      img: "https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3DgQZ2jQcuoqhCZ6tVmRBP9P_subhadip.mitra.jpg&w=1080&q=75",
      positions: [
        {
          pos: "Cultural Coordinator",
          years: "2021-present"
        }
      ]
    },
    {
      uid: "aftab.hussain",
      name: "Aftab M Hussain",
      img: "https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3D1gedB8HrQiU6rQotz3hpfCV8_aftab.hussain.jpg&w=1080&q=75",
      positions: [
        {
          pos: "Cultural Coordinator",
          years: "2021-present"
        }
      ]
    },
    {
      uid: "sunita.palissery",
      name: "Sunita Palissery",
      img: "https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3D746Jqpw8AVFya6McqnFv52_sunitha.palissery.jpg&w=1080&q=75",
      positions: [
        {
          pos: "Campus Life Coordinator",
          years: "2021-present"
        }
      ]
    },
    {
      uid: "rcprasad",
      name: "Ramachandra Prasad P",
      img: "https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3DNevNpri3qtu5yAZiGaPrBy_rcprasad.jpg&w=1080&q=75",
      positions: [
        {
          pos: "Campus Life Coordinator",
          years: "2021-present"
        }
      ]
    },
    {
      uid: "chiranjeevi.yarra",
      name: "Chiranjeevi Yarra",
      img: "https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3DBBdL5zwRwwB7FRasoqZpry_chiranjeevi.yarra.jpg&w=1080&q=75",
      positions: [
        {
          pos: "NSS Officer",
          years: "2021-present"
        }
      ]
    },
    {
      uid: "prasad.krishnan",
      name: "Prasad Krishnan",
      img: "https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3DTt6hYCDiiXmkfbSK2iVJc5_prasad.krishnan.jpg&w=1080&q=75",
      positions: [
        {
          pos: "NSS Officer",
          years: "2021-present"
        }
      ]
    },
    {
      uid: "priyanka.srivastava",
      name: "Priyanka Srivastava",
      img: "https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3DmvTng5J29NFDUcFj95aj3j_priyanka.srivastava.jpg&w=1080&q=75",
      positions: [
        {
          pos: "Counselling Coordinator",
          years: "2023-present"
        }
      ]
    },
    {
      uid: "prabhakar",
      name: "Prabhakar M",
      img: "https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3DTW7T3LrHjbyyDtHPHNztiq_prabhakar.jpg&w=1080&q=75",
      positions: [
        {
          pos: "Admin Support",
          years: "2019-present"
        }
      ]
    }
  ];
  let sloMembers = [
    {
      uid: "prabhakar",
      name: "Prabhakar M",
      img: "https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3DTW7T3LrHjbyyDtHPHNztiq_prabhakar.jpg&w=1080&q=75",
      positions: [{ pos: "SLO Head", years: "2019-present" }]
    },
    {
      uid: "vamsi.krishna",
      name: "Vamsi Krishna",
      img: "https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3D3fXHVeqViSZ8A9BHaVeSdt_vamsi.krishna.jpg&w=1080&q=75",
      positions: [{ pos: "Member", years: "2023-present" }]
    },
    {
      uid: "akhil.a",
      name: "Akhil A",
      img: "https://clubs.iiit.ac.in/_next/image?url=http%3A%2F%2Ffiles%2Ffiles%2Fdownload%3Ffilename%3DLCLbLdaM6nL9AppVYT3qTQ_akhil.a.jpg&w=1080&q=75",
      positions: [{ pos: "Member", years: "2021-2023" }]
    }
  ];
  $$result.css.add(css);
  return `<div class="container h-full w-full mx-auto flex justify-center flex-col"><div class="flex flex-col"><h2 class="h2" data-svelte-h="svelte-g5r9ig">Student Affairs Committe (SAC)</h2> <h3 class="h3" data-svelte-h="svelte-kjujof">Members</h3> <div class="avatar-grid svelte-7v0h0y">${each(sacMembers, (member) => {
    return `<div class="flex flex-col items-center"><a${add_attribute("href", "https://clubs.iiit.ac.in/profile/" + member.uid, 0)} target="_blank">${validate_component(Avatar, "Avatar").$$render(
      $$result,
      {
        src: member.img,
        alt: member.name,
        width: "w-32",
        rounded: "rounded-md"
      },
      {},
      {}
    )}</a> <h4>${escape(member.name)}</h4> <br> ${each(member.positions, (position) => {
      return `<p>${escape(position.pos)}</p> <p>${escape(position.years)}</p> <br>`;
    })} </div>`;
  })}</div> <h2 class="h2" data-svelte-h="svelte-1vq4ef3">Student Life Committe (SLC)</h2> <br> <h3 class="h3" data-svelte-h="svelte-i7cmvz">What do we do?</h3> <br> <p data-svelte-h="svelte-m5k7gy">The Student Life Comittee is dedicated to enhancing the overall student experience and
			fostering a vibrant and inclusive campus community. We believe that student life is an
			integral part of a well-rounded education, and we strive to create opportunities for personal
			growth, leadership development, and meaningful connections among students.
			<br>
			Our committee consists of passionate student representatives who work closely with faculty, staff,
			and the wider student body to organize and coordinate a wide range of events, programs, and initiatives.
			From social gatherings and cultural celebrations to educational workshops and community service
			projects, we aim to provide diverse opportunities for students to explore their interests, build
			lasting friendships, and make a positive impact on campus.</p> <br> <h3 class="h3" data-svelte-h="svelte-kjujof">Members</h3> <div class="avatar-grid svelte-7v0h0y">${each(slcMembers, (member) => {
    return `<div class="flex flex-col items-center"><a${add_attribute("href", "https://clubs.iiit.ac.in/profile/" + member.uid, 0)} target="_blank">${validate_component(Avatar, "Avatar").$$render(
      $$result,
      {
        src: member.img,
        alt: member.name,
        width: "w-32",
        rounded: "rounded-md"
      },
      {},
      {}
    )}</a> <h4>${escape(member.name)}</h4> <br> ${each(member.positions, (position) => {
      return `<p>${escape(position.pos)}</p> <p>${escape(position.years)}</p> <br>`;
    })} </div>`;
  })}</div> <h2 class="h2" data-svelte-h="svelte-7n33pl">Student Life Office (SLO)</h2> <br> <h3 class="h3" data-svelte-h="svelte-i7cmvz">What do we do?</h3> <br> <p data-svelte-h="svelte-dy27fi">Our mission is to enhance the overall student experience and promote a vibrant campus
			community. We are dedicated to encouraging an equitable balance between academics and
			extra-curricular activities for all students across campus and empowering students throughout
			their academic journey.
			<br>
			The Student Life Office is here to assist you and ensure that your time at our institution is fulfilling,
			enjoyable, memorable and our friendly staff is ready to answer your questions and provide the support
			you need. We understand that your time in college is about more than just attending classes and
			studying; it&#39;s about discovering your passions and creating lasting memories. That&#39;s why we offer
			a variety of programs and initiatives designed to enrich your student life experience.</p> <br> <h3 class="h3" data-svelte-h="svelte-kjujof">Members</h3> <div class="avatar-grid svelte-7v0h0y">${each(sloMembers, (member) => {
    return `<div class="flex flex-col items-center"><a${add_attribute("href", "https://clubs.iiit.ac.in/profile/" + member.uid, 0)} target="_blank">${validate_component(Avatar, "Avatar").$$render(
      $$result,
      {
        src: member.img,
        alt: member.name,
        width: "w-32",
        rounded: "rounded-md"
      },
      {},
      {}
    )}</a> <h4>${escape(member.name)}</h4> <br> ${each(member.positions, (position) => {
      return `<p>${escape(position.pos)}</p> <p>${escape(position.years)}</p> <br>`;
    })} </div>`;
  })}</div></div> </div>`;
});
export {
  Page as default
};
