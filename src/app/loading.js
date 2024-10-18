const Loading = () => {
  return (
    <div class="flex h-screen items-center justify-center space-x-2 bg-[#212529] dark:invert">
      <span class="sr-only">Loading...</span>
      <div class="h-8 w-8 animate-bounce rounded-full bg-[#bac964] [animation-delay:-0.3s]"></div>
      <div class="h-8 w-8 animate-bounce rounded-full bg-[#bac964] [animation-delay:-0.15s]"></div>
      <div class="h-8 w-8 animate-bounce rounded-full bg-[#bac964]"></div>
    </div>
  );
};
export default Loading;
