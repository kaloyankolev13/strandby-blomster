<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
      <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          Frequently asked questions
        </h2>
        <dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
          <Disclosure
            as="div"
            v-for="faq in faqs"
            :key="faq.question"
            class="pt-6"
            v-slot="{ open }"
          >
            <dt>
              <DisclosureButton
                class="flex w-full items-start justify-between text-left text-gray-900"
              >
                <span class="text-base font-semibold leading-7">{{
                  faq.question
                }}</span>
                <span class="ml-6 flex h-7 items-center">
                  <PlusSmallIcon
                    v-if="!open"
                    class="h-6 w-6"
                    aria-hidden="true"
                  />
                  <MinusSmallIcon v-else class="h-6 w-6" aria-hidden="true" />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base leading-7 text-gray-600">{{ faq.answer }}</p>
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
      <div class='text-center pt-20'>
      <p class='mb-10'>Do you have more questions? Do not hesitate to call or email us. We'll be happy to help you!</p>
      <p class='font-bold'>75 13 82 23 </p>
      <p class='font-bold underline'>strandby27@live.dk</p>
    </div>
    </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/vue/24/outline";

const faqs = [
  {
    question: "What is the difference between bouquet size and price groups?",
    answer:
      "here are 3 different price categories for most of our bouquets. Size varies with price, and includes more or fewer flowers. The image most often represents medium. The exact number of flowers may vary depending on the season and daily changes in prices at the florist, but we guarantee that the colour, shape and amount are always correct!",
  },
  {
    question:"Do you deliver flowers on Sundays and public holidays?",
    answer:"We cannot guarantee delivery on Sundays and public holidays. In most major cities, however, there are a few shops that are open and can deliver on Sundays. For special holidays and anniversaries such as Mother's Day, most flower shops are open and can deliver."
  },
  {
    question:"I can’t log in to my personal account?",
    answer:"Check that you have filled in correct information. Otherwise, contact us and we will check your account."
  },
  
  // More questions...
];
</script>
