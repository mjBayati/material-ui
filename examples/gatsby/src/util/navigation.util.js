import { navigate } from "gatsby";

const navigateToSection = (navigation) => {
    const section = document.getElementById(navigation.sectionId);
    if (!section) {
        return;
    }
    const yOffset = -90;
    const position = section.getBoundingClientRect().top + (window?.pageYOffset || 0) + yOffset;
    window?.scrollTo({ behavior: 'smooth', top: position })
}

const navigateToOtherPageSection = (navigation) => {
    if (typeof window === "undefined") {
        return navigateToSection(navigation)
    } else if (window.location.pathname === navigation.location) {
        return navigateToSection(navigation)
    }
    return navigate(navigation.location + '#' + navigation.sectionId)
}

const navigateToRemoteLocation = (navigation) => {
    if (typeof window === "undefined") {
        return;
    }
    return window.open(navigation.remoteLink);
}

export const handleNavigation = (navigation) => {
    if (navigation.link) {
        return navigate(navigation.link);
    } else if (navigation.sectionId && navigation.location) {
        return navigateToOtherPageSection(navigation)
    } else if (navigation.remoteLink) {
        return navigateToRemoteLocation(navigation)
    }
    navigateToSection(navigation)
}