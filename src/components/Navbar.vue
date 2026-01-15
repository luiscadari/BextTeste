<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="left-1 w-screen top-1 fixed">
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem class="">
          <NavigationMenuTrigger class="text-white"
            >Início</NavigationMenuTrigger
          >
          <NavigationMenuContent>
            <ul
              class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)]"
            >
              <li class="row-span-12">
                <NavigationMenuLink as-child>
                  <div
                    class="flex text-center h-full w-full select-none flex-col justify-end rounded-md bg-linear-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  >
                    <div class="text-4xl">📑</div>
                    <div class="mb-2 mt-4 text-lg font-medium">
                      Gerenciador de tarefas
                    </div>
                    <p class="text-sm leading-tight text-muted-foreground">
                      Aplicativo de organização de tarefas. Feito como solução
                      de desafio técnico front-end pleno da Bext.
                    </p>
                  </div>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink
                  ><RouterLink to="/">Home</RouterLink></NavigationMenuLink
                >
              </li>
              <li>
                <NavigationMenuLink
                  ><RouterLink to="/login"
                    >Login</RouterLink
                  ></NavigationMenuLink
                >
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem class="">
          <NavigationMenuTrigger class="text-white"
            >Sobre</NavigationMenuTrigger
          >
          <NavigationMenuContent>
            <NavigationMenuLink
              ><a href="https://github.com">Github</a></NavigationMenuLink
            >
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </div>
</template>
