@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 220 20% 97%;
    --foreground: 216 50% 26%;

    --card: 0 0% 100%;
    --card-foreground: 216 50% 26%;

    --popover: 0 0% 100%;
    --popover-foreground: 216 50% 26%;

    --primary: 216 63% 26%;
    --primary-foreground: 0 0% 100%;

    --secondary: 220 20% 94%;
    --secondary-foreground: 216 50% 26%;

    --muted: 220 15% 92%;
    --muted-foreground: 216 15% 50%;

    --accent: 30 91% 53%;
    --accent-foreground: 0 0% 100%;

    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;

    --border: 220 15% 90%;
    --input: 220 15% 90%;
    --ring: 216 63% 26%;

    --radius: 0.75rem;

    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;

    --whatsapp: 142 70% 40%;
  }

  .dark {
    --background: 216 50% 8%;
    --foreground: 220 20% 95%;
    --card: 216 50% 12%;
    --card-foreground: 220 20% 95%;
    --popover: 216 50% 12%;
    --popover-foreground: 220 20% 95%;
    --primary: 30 91% 53%;
    --primary-foreground: 0 0% 100%;
    --secondary: 216 40% 18%;
    --secondary-foreground: 220 20% 95%;
    --muted: 216 30% 18%;
    --muted-foreground: 220 15% 60%;
    --accent: 30 91% 53%;
    --accent-foreground: 0 0% 100%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 216 30% 20%;
    --input: 216 30% 20%;
    --ring: 30 91% 53%;
    --sidebar-background: 216 50% 8%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 30 91% 53%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 216 40% 15%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 216 30% 20%;
    --sidebar-ring: 30 91% 53%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground font-sans;
    font-family: 'Inter', sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Space Grotesk', sans-serif;
  }
}

@layer utilities {
  .text-gradient {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent;
  }
}

html {
  scroll-behavior: smooth;
}
