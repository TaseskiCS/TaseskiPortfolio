export const scrollToSection = (id) => {
    console.log('called from', id)
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};