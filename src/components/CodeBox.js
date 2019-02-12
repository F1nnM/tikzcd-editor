import {h, Component} from 'preact'
import classNames from 'classnames'
import copyText from 'copy-text-to-clipboard'

export default class CodeBox extends Component {
    constructor(props) {
        super(props)
    }

    handleOverlayClick = evt => {
        if (evt.target !== evt.currentTarget) return

        this.handleCloseClick()
    }

    handleCopyClick = () => {
        copyText(this.props.code)

        this.textareaElement.focus()
        this.textareaElement.select()
    }

    handleCloseClick = () => {
        let {onClose = () => {}} = this.props
        onClose()
    }

    render() {
        let {show, code} = this.props

        return <section
            id="modal-overlay"
            class={classNames({show})}
            onClick={this.handleOverlayClick}
        >
            <section class="modal-box code-box">
                <textarea
                    ref={el => this.textareaElement = el}
                    value={code}
                />

                <ul class="buttons">
                    <li><button onClick={this.handleCopyClick}>Copy</button></li>
                    <li><button onClick={this.handleCloseClick}>Close</button></li>
                </ul>
            </section>
        </section>
    }
}
