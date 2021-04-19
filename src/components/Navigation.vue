<template>
  <div class="navigation flex flex-row justify-between ">
    <ul>
      <router-link :to="goto">
        <img
          src="@/assets/swapper-logo.png"
          alt="DT Swapper"
          width="261"
          height="70"
          className="scale-150 md:scale-100 transform z-10 mx-2 md:mx-0 lg:mx-2 sm:mx-0"
        />
      </router-link>
    </ul>
    <ul>
      <li>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
        <img className="w-20 md:w-10" :src="image">
      </MenuButton>
    </div>

    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems class="z-50 text-black origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div class="py-1 w-full">
          <MenuItem  :disabled="checkbox" @click="toggle" v-slot="{ active }" className="mb-5">
            <span  :className="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']"><div className="flex items-center justify-between rounded-md text-md mx-2 hover:bg-gray-500 text-sm text-bold px-5">Italian <img className="inline my-2 mb-4 w-10 sm:w-10 md:w-10" width="40" src="https://cdn.countryflags.com/thumbs/italy/flag-round-250.png"/></div></span>
          </MenuItem>
          <MenuItem  @click="toggleCheckbox" v-slot="{ active }" className="mb-1">
            <span  :className="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700 ', ' block px-10 py-2 text-sm']"><div className="flex items-center justify-between rounded-md text-md mx-2 hover:bg-gray-500 text-sm text-bold px-5">English (UK) <img className="inline my-4 w-10 sm:w-10 md:w-10" width="40" src="https://cdn.countryflags.com/thumbs/united-kingdom/flag-round-250.png"/></div></span>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
  </li>
  </ul>
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
export default {
  name: "Navigation",
  props: {
    msg: String,
  },
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
  },
  data: () => ({
    isActive: document.location.pathname.split("ita").length > 1 ? false : true,
    checkbox: document.location.pathname.split("ita").length > 1 ? true : false,
    image:
      document.location.pathname.split("ita").length > 1
        ? "https://cdn.countryflags.com/thumbs/italy/flag-round-250.png"
        : "https://cdn.countryflags.com/thumbs/united-kingdom/flag-round-250.png",
    goto: document.location.pathname.split("ita").length > 1 ? "/ita" : "/",
    
  }),
  methods: {
    toggle() {
      if (!this.checkbox) {
        location.replace(
          document.location.origin + "/ita" + document.location.pathname
        );
      }
    },
    toggleCheckbox() {
      if (this.checkbox) {
        location.replace(
          document.location.origin + document.location.pathname.split("/ita")[1]
        );
      }
    },
  },
};
</script>

<style scoped>
.dropdown:hover .dropdown-menu{
  display: block;
}

.navigation {
  background-color: #4e51b0;
}

.navigation ul {
  max-width: 80%;
  margin: 0 2rem;
  display: flex;
  align-items: center;
  padding: 5px;
}

.navigation ul li {
  list-style: none;
}

.navigation ul li a {
  color: white;
}

</style>
