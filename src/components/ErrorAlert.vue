<script>
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-vue-next";
export default {
  name: "ErrorAlert",
  props: ["message"],
  components: {
    Alert,
    AlertDescription,
    AlertTitle,
    AlertCircle,
  },
};
</script>

<template>
  <Alert variant="destructive">
    <AlertCircle class="w-4 h-4" />
    <AlertTitle class="text-left">Ops...</AlertTitle>
    <AlertDescription class="text-left">
      {{ message }}
    </AlertDescription>
  </Alert>
</template>
