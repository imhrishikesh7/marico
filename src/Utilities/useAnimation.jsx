// animations.js
export const fadeIn = {
    initial: {
        opacity: 0,
        scale: 0.9,
    },
    whileInView: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.7,
            bounce: 1,
        },
    },
};

export const slideInFromLeft = {
    initial: {
        opacity: 0,
        x: '-5%',
    },
    whileInView: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            bounce: 1,
        },
    },
};

export const slideInFromRight = {
    initial: {
        opacity: 0,
        x: '15%',
    },
    whileInView: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            bounce: 1,
        },
    },
};
export const slideUp = {
    initial: {
        opacity: 0,
        y: '15%',
    },
    whileInView: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            bounce: 1,
        },
    },
};

// Add more animations as needed
