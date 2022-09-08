import { recipe } from '@vanilla-extract/recipes';

export const buttonVariants = recipe({
    base: {
        color: '#000000',
        padding: '0.5rem 2rem',
        borderRadius: '0.2rem',
        fontSize: '1rem',
        border: 'unset'
    },
    variants: {
        style: {
            primary: {
                backgroundColor: 'red',
                boxShadow: '0 0 1rem #ff0000',
                ':hover': {
                    backgroundColor: 'rgba(255,0,0,0.50)',
                    color: '#ffffff'
                }
            },
            secondary: {
                backgroundColor: '#0032ff',
                boxShadow: '0 0 1rem #0032ff',
                ':hover': {
                    backgroundColor: 'rgba(0,50,255,0.5)',
                    color: '#ffffff'
                }
            },
            ternary: {
                backgroundColor: '#ffd500',
                boxShadow: '0 0 1rem #ffd500',
                ':hover': {
                    backgroundColor: 'rgba(255,213,0,0.77)',
                    color: '#ffffff'
                }
            }
        }
    },
    defaultVariants: {
        style: 'primary'
    }
});