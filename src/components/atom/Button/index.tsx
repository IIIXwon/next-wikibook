import {styled} from 'styled-components'
import {Responsive} from 'types'
import {
    toPropValue,
    Color,
    FontSizes,
    LetterSpacings,
    LineHeights,
    Space,
} from 'utils/style'

export type ButtonVariant = 'primary' | 'secondary' | 'danger'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant
    fontSize?: Responsive<FontSizes>
    fontWeight?: Responsive<string>
    letterSpacing?: Responsive<LetterSpacings>
    lineHeight?: Responsive<LineHeights>
    textAlign?: Responsive<string>
    color?: Responsive<Color>
    backgroundColor?: Responsive<Color>
    width?: Responsive<string>
    height?: Responsive<string>
    minWidth?: Responsive<string>
    minHeight?: Responsive<string>
    display?: Responsive<string>
    border?: Responsive<string>
    overflow?: Responsive<string>
    margin?: Responsive<Space>
    marginTop?: Responsive<Space>
    marginLeft?: Responsive<Space>
    marginRight?: Responsive<Space>
    marginBottom?: Responsive<Space>
    padding?: Responsive<Space>
    paddingTop?: Responsive<Space>
    paddingBottom?: Responsive<Space>
    paddingLeft?: Responsive<Space>
    paddingRight?: Responsive<Space>
    pseudoClass?: {
        hover?: {
            backgroundColor?: Responsive<Color>
        }
        disabled?: {
            backgroundColor?: Responsive<Color>
        }
    }
}

const variants = {
    primary: {
        color: 'white',
        backgroundColor: 'primary',
        border: 'none',
        pseudoClass: {
            hover: {
                backgroundColor: 'primaryDark',
            },
            disabled: {
                backgroundColor: 'primary'
            },
        },
    },
    secondary: {
        color: 'white',
        backgroundColor: 'secondary',
        border: 'none',
        pseudoClass: {
            hover: {
                backgroundColor: 'secondaryDark',
            },
            disabled: {
                backgroundColor: 'secondary'
            },
        },
    },
    danger: {
        color: 'white',
        backgroundColor: 'danger',
        border: 'none',
        pseudoClass: {
            hover: {
                backgroundColor: 'dangerDark',
            },
            disabled: {
                backgroundColor: 'danger'
            },
        },
    },
}

const Button = styled.button<ButtonProps>`
    ${({variant, color, backgroundColor, pseudoClass, theme}) => {
        if (variant && variants[variant]) {
            const styles = []
            !color && styles.push(toPropValue('color', variants[variant].color, theme))
            !backgroundColor && styles.push(toPropValue('background-color', variants[variant].backgroundColor
                    , theme))
            !pseudoClass && styles.push(
                    `&:hover {${toPropValue('background-color', variants[variant].pseudoClass.hover.backgroundColor
                            , theme)}}`.replaceAll('\n', ''),
            )
            !pseudoClass && styles.push(
                    `&:disalbed {
                    ${toPropValue('background-color', variants[variant].pseudoClass.disabled.backgroundColor
                            , theme)}}`.replaceAll('\n', ''),
            )
            return styles.join('\n')
        }
    }}
    ${(props) => toPropValue('font-size', props.backgroundColor, props.theme)}
    ${(props) => toPropValue('letter-spacing', props.backgroundColor, props.theme)}
    ${(props) => toPropValue('line-height', props.backgroundColor, props.theme)}
    ${(props) => toPropValue('color', props.backgroundColor, props.theme)}
    ${(props) => toPropValue('background-color', props.backgroundColor, props.theme)}
    ${(props) => toPropValue('width', props.backgroundColor, props.theme)}
    ${(props) => toPropValue('height', props.backgroundColor, props.theme)}
    ${(props) => toPropValue('min-width', props.backgroundColor, props.theme)}
    ${(props) => toPropValue('min-height', props.backgroundColor, props.theme)}
    ${(props) => toPropValue('display', props.backgroundColor, props.theme)}
    ${(props) => toPropValue('border', props.backgroundColor, props.theme)}
    ${(props) => toPropValue('overflow', props.backgroundColor, props.theme)}
    ${(props) => toPropValue('margin', props.backgroundColor, props.theme)}
    ${(props) => toPropValue('margin-top', props.backgroundColor, props.theme)}
    ${(props) => toPropValue('margin-bottom', props.backgroundColor, props.theme)}
    ${(props) => toPropValue('margin-left', props.backgroundColor, props.theme)}
    ${(props) => toPropValue('margin-right', props.backgroundColor, props.theme)}
    ${(props) => toPropValue('padding', props.backgroundColor, props.theme)}
    ${(props) => toPropValue('padding-top', props.backgroundColor, props.theme)}
    ${(props) => toPropValue('padding-bottom', props.backgroundColor, props.theme)}
    ${(props) => toPropValue('padding-left', props.backgroundColor, props.theme)}
    ${(props) => toPropValue('padding-right', props.backgroundColor, props.theme)}
    &:hover {
        ${(props) => toPropValue('background-color', props?.pseudoClass?.hover?.backgroundColor,
                props.theme)}
    }

    &:disabled {
        ${(props) => toPropValue('background-color', props?.pseudoClass?.disabled?.backgroundColor,
                props.theme)}
    }

    cursor: pointer;
    outline: 0;
    text-decoration: 'none';
    opacity: ${({disabled}) => (disabled ? '0.5' : 1)};
    border-radius: 4px;
    border: none;
`

Button.defaultProps = {
    variant: 'primary',
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 1,
    paddingBottom: 1,
    color: 'white',
    display: 'inline-block',
    textAlign: 'center',
    lineHeight: 'inherit',
    fontSize: 'inherit',
}

export default Button