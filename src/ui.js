import Map from './map'
import Wad from './wad'
import Replay from './replay'
import Fullscreen from './fullscreen'
import Game from './game'
import * as Time from './time'

let ui_play_btn =
`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' fill='currentcolor'>
    <path d='M0 0 L0 64 L64 32 Z' />
</svg>`

let ui_pause_btn =
`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' fill='currentcolor'>
    <path d='M0 0 L0 64 L20 64 L20 0 M44 0 L64 0 L64 64 L44 64 Z' />
</svg>`

let ui_step_btn =
`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' fill='currentcolor'>
    <path d='M0 0 L0 64 L8 64 L8 0 M16 0 L16 64 L64 32 Z' />
</svg>`

let ui_speed_btn =
`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' fill='currentcolor'>
    <path d='M0 0 L0 64 L32 32 L32 64 L64 32 L32 0 L32 32 Z' />
</svg>`

let ui_fullscreen_btn =
`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' fill='currentcolor'>
    <path d='M0 22 L8 22 L8 8 L22 8 L22 0 L0 0 M42 0 L42 8 L56 8 L56 22 L64 22 L64 0 M0 64 L0 42 L8 42 L8 56 L22 56 L22 64 M64 64 L42 64 L42 56 L56 56 L56 42 L64 42 Z' />
</svg>`

let ui_smallscreen_btn =
`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' fill='currentcolor'>
    <path d='M0 22 L22 22 L22 0 L14 0 L14 14 L0 14 M42 0 L42 22 L64 22 L64 14 L50 14 L50 0 M14 50 L0 50 L0 42 L22 42 L22 64 L14 64 M42 64 L42 42 L64 42 L64 50 L50 50 L50 64 Z' />
</svg>`

let ui_settings_btn =
`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path fill-rule="evenodd" clip-rule="evenodd" fill="currentcolor" d="M23.9 10.7c0-0.3-0.4-0.6-0.8-0.6 -1.1 0-2.1-0.6-2.5-1.6 -0.4-1-0.1-2.2 0.7-3 0.3-0.2 0.3-0.6 0.1-0.9 -0.6-0.7-1.2-1.4-1.9-1.9 -0.3-0.2-0.7-0.2-0.9 0.1 -0.7 0.8-2 1.1-3 0.7 -1-0.4-1.7-1.5-1.6-2.6 0-0.4-0.2-0.7-0.6-0.7 -0.9-0.1-1.8-0.1-2.7 0C10.4 0.1 10.1 0.4 10.1 0.8 10.1 1.9 9.5 2.9 8.5 3.3 7.5 3.7 6.2 3.4 5.5 2.6c-0.2-0.3-0.6-0.3-0.9-0.1 -0.7 0.6-1.4 1.2-1.9 1.9C2.4 4.8 2.5 5.2 2.7 5.4c0.8 0.8 1.1 2 0.7 3 -0.4 1-1.4 1.6-2.6 1.6 -0.4 0-0.7 0.2-0.7 0.6 -0.1 0.9-0.1 1.8 0 2.7 0 0.3 0.4 0.6 0.8 0.6 1 0 2 0.6 2.5 1.6 0.4 1 0.2 2.2-0.7 3 -0.3 0.2-0.3 0.6-0.1 0.9 0.6 0.7 1.2 1.4 1.9 1.9 0.3 0.2 0.7 0.2 0.9-0.1 0.7-0.8 2-1.1 3-0.7 1 0.4 1.7 1.5 1.6 2.6 0 0.4 0.2 0.7 0.6 0.7C11.1 24 11.5 24 12 24c0.4 0 0.9 0 1.3-0.1 0.3 0 0.6-0.3 0.6-0.7 0-1.1 0.6-2.1 1.6-2.6 1-0.4 2.3-0.1 3 0.7 0.2 0.3 0.6 0.3 0.9 0.1 0.7-0.6 1.4-1.2 1.9-1.9 0.2-0.3 0.2-0.7-0.1-0.9 -0.8-0.8-1.1-2-0.7-3 0.4-1 1.4-1.6 2.5-1.6l0.1 0c0.3 0 0.7-0.2 0.7-0.6C24 12.5 24 11.6 23.9 10.7zM12 18c-3.3 0-6-2.7-6-6s2.7-6 6-6c3.3 0 6 2.7 6 6S15.3 18 12 18zM12 16"/>
</svg>`

let ui_loading_anim =
`<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink" 
    x="0px" y="0px"
    width="80px" height="80px"
    viewBox="0 0 80 80"
    xml:space="preserve">
    <path
        fill="#ffffff"
        width="10px"
        d="M40,72C22.4,72,8,57.6,8,40C8,22.4,
        22.4,8,40,8c17.6,0,32,14.4,32,32c0,1.1-0.9,2-2,2
        s-2-0.9-2-2c0-15.4-12.6-28-28-28S12,24.6,12,40s12.6,
        28,28,28c1.1,0,2,0.9,2,2S41.1,72,40,72z">
        <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 40 40"
            to="360 40 40"
            dur="0.6s"
            repeatCount="indefinite"
        />
    </path>
</svg>`

let ui_style =
`<style>
.hlv {
    position:relative;
    width:100%;
    height:100%;
    font-family:Roboto,Arial,Helvetica,sans-serif;
    color:#fff;
}
.hlv::before,
.hlv::after,
.hlv *::before,
.hlv *::after {
    all: unset;
}
.hlv div {
    box-sizing:content-box;
    background:none;
    line-height:initial;
}
.hlv .screen {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:10;
}
.hlv .title {
    display:none;
    z-index:20;
    position:absolute;
    top:16px;
    left:0;
    padding:10px;
    padding-left:20px;
    color:#fff;
    background:rgba(0,0,0,0.4);
    font-size:14pt;
    opacity:0;
    transition:opacity 0.2s;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
}
.hlv .controls {
    display:none;
    z-index:30;
    position:absolute;
    width:100%;
    bottom:0;
    padding:0 16px;
    box-sizing:border-box;
    background:rgba(0,0,0,0.4);
    opacity:0;
    transition:opacity 0.2s;
}
.hlv .progress {
    position:relative;
    height:14px;
    cursor:pointer;
    margin:0;
    border-radius:0;
    overflow:initial;
    background:none;
    -webkit-box-shadow:none;
    box-shadow:none;
}
.hlv .progress .time {
    display:none;
    position:absolute;
    bottom:20px;
    padding:5px;
    margin-left:-2px;
    transform:translate(-50%, 0);
    font-size:10pt;
    background:rgba(0,0,0,0.4);
}
.hlv .ghost-line {
    height:4px;
    background:rgba(255,255,255,0.5);
    top:8px;
    position:absolute;
    left:0;
    right:0;
    border-radius:2px;
}
.hlv .line {
    height:4px;
    background:#fff;
    top:8px;
    position:absolute;
    left:0;
    right:0;
    border-radius:2px;
}
.hlv .knob {
    position:absolute;
    width:12px;
    height:12px;
    background:#fff;
    border-radius:6px;
    left:0;
    top:4px;
    margin-left:-6px;
}
.hlv .ghost-knob {
    position:absolute;
    width:8px;
    height:8px;
    background:#fff;
    box-sizing:border-box;
    border-radius:8px;
    left:0;
    top:6px;
    margin-left:-4px;
    display:none;
}
.hlv .settings-menu {
    position:absolute;
    right:14px;
    bottom:68px;
    display:none;
    list-style:none;
    margin:0;
    padding:2px 6px;
    background:rgba(0,0,0,0.4);
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    min-width:100px;
}
.hlv .settings-menu > .mode {
    padding:6px 4px;
    margin-bottom:6px;
    border-bottom:1px solid #ddd;
    font-size:10pt;
    font-weight:bold;
}
.hlv .settings-item.replay-mode {
    margin-top:4px;
    padding:4px;
    font-size:10pt;
    cursor:pointer;
}
.hlv .settings-item.free-mode {
    margin:4px 0;
    padding:4px;
    font-size:10pt;
    cursor:pointer;
    background:rgba(255,255,255,0.2)
}
.hlv .buttons {
    display:flex;
    justify-content:space-between;
    padding:0 4px;
}
.hlv .left-buttons {
    height:40px;
    padding:4px 0;
    display:flex;
    box-sizing:border-box;
}
.hlv .left-buttons .time {
    font-size:10pt;
    display:flex;
    align-items:center;
    user-select:none;
    -ms-user-select:none;
    -moz-user-select:none;
}
.hlv .left-buttons .button {
    box-sizing:border-box;
    width:32px;
    height:32px;
    padding:7px;
    margin-right:8px;
    cursor:pointer;
}
.hlv .speeddown.button svg {
    transform:rotate(180deg);
}
.hlv .right-buttons {
    height:40px;
    padding:4px 0;
    box-sizing:border-box;
    display:flex;
}
.hlv .settings.button {
    width:20px;
    height:20px;
    padding:6px;
    cursor:pointer;
    margin-right:8px;
}
.hlv .fullscreen.button {
    width:20px;
    height:20px;
    padding:6px;
    cursor:pointer;
}
.hlv .loading {
    position:relative;
    width:100%;
    height:100%;
    z-index:20;
    display:none;
    transition:opacity 2s ease;
}
.hlv .loading .spinner {
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
}
.hlv .loading .log {
    position:absolute;
    background: rgba(0,0,0,0.4);
    padding:10px;
    font-family:monospace;
    margin:0;
    top:16px;
    right:0;
    padding-left:16px;
    list-style:none;
}
.hlv .loading .log > li {
    display:block;
}
</style>`

let ui_template =
`<div class="hlv">
    <div class="screen"></div>
    <div class="title"></div>
    <div class="controls">
        <div class="progress">
            <div class="time">12:34</div>
            <div class="ghost-line"></div>
            <div class="line"></div>
            <div class="knob"></div>
            <div class="ghost-knob"></div>
        </div>
        <ul class="settings-menu">
                <li class="mode">Mode</li>
                <li class="settings-item replay-mode">Replay</li>
                <li class="settings-item free-mode">Free</li>
            </ul>
        <div class="buttons" draggable="false">
            <div class="left-buttons">
                <div class="speeddown button">${ui_speed_btn}</div>
                <div class="play button">${ui_play_btn}</div>
                <div class="speedup button">${ui_speed_btn}</div>
                <div class="time">01:23 / 01:55</div>
            </div>
            <div class="right-buttons">
                <div class="settings button">${ui_settings_btn}</div>    
                <div class="fullscreen button">${ui_fullscreen_btn}</div>
            </div>
        </div>
    </div>

    <div class="loading">
        <div class="spinner">${ui_loading_anim}</div>
        <ul class="log"></ul>
    </div>
</div>`

const createDomFromHtml = (html) => {
    let tempNode = document.createElement('div')
    tempNode.innerHTML = html.trim()
    if (tempNode.children.length === 1) {
        return tempNode.firstChild
    } else {
        return tempNode.children
    }
}

const formatLoadingItem = (name, progress, color = 'white') => {
    let length = 59 - name.length - progress.length
    if (length < 2) {
        name = name.substr(0, 50)
        length = 9 - progress.length
    }
    let dots = Array(length).join('.')

    return `<span style="color:${color}">${name}${dots}${progress}%</span>`
}

export default class UI {
    constructor(target, game) {
        if (!UI.style) {
            UI.style = createDomFromHtml(ui_style)
            document.head.appendChild(UI.style)
        }

        target.appendChild(createDomFromHtml(ui_template))

        this.game = game
        this.title = ''
        this.isInFocus = false
        this.buttons = {
            play: createDomFromHtml(ui_play_btn),
            pause: createDomFromHtml(ui_pause_btn),
            fullscreen: createDomFromHtml(ui_fullscreen_btn),
            smallscreen: createDomFromHtml(ui_smallscreen_btn),
            settings: createDomFromHtml(ui_settings_btn)
        }

        let root = target.querySelector('.hlv')
        this.dom = {
            root,
            screen: root.querySelector('.screen'),
            title: root.querySelector('.title'),
            loading: root.querySelector('.loading'),
            loadingLog: root.querySelector('.loading .log'),
            loadAnim: root.querySelector('.loading .spinner'),
            controls: root.querySelector('.controls'),
            progressTime: root.querySelector('.progress .time'),
            progressBar: root.querySelector('.progress'),
            progressLine: root.querySelector('.progress .line'),
            progressBarKnob: root.querySelector('.progress .knob'),
            progressGhostKnob: root.querySelector('.progress .ghost-knob'),
            leftButtons: root.querySelector('.controls .left-buttons'),
            time: root.querySelector('.controls .left-buttons .time'),
            play: root.querySelector('.play.button'),
            speedDown: root.querySelector('.speeddown.button'),
            speedUp: root.querySelector('.speedup.button'),
            fullscreen: root.querySelector('.fullscreen.button'),
            settings: root.querySelector('.settings.button'),
            settingsMenu: root.querySelector('.settings-menu'),
            modeReplay: root.querySelector('.settings-item.replay-mode'),
            modeFree: root.querySelector('.settings-item.free-mode')
        }
        this.dom.screen.appendChild(game.getCanvas())

        this.loading = false
        this.loadingItems = []
        game.loader.events.addListener('loadstart', item => {
            if (!this.loading) {
                this.showLoading()
                this.hideReplayControls()
                this.loading = true
            }

            let loadingItem = this.loadingItems.find(a => a === item)
            if (!loadingItem) {
                let node = createDomFromHtml(`<li></li>`)
                node.innerHTML = formatLoadingItem(item.name, '0')
                this.dom.loadingLog.appendChild(node)
                this.loadingItems.push({
                    item,
                    node: node
                })
            }
        })
        game.loader.events.addListener('progress', item => {
            let entry = this.loadingItems.find(a => a.item === item)
            if (!entry) return

            let name = entry.item.name  
            let progress = '' + Math.round(entry.item.progress * 100)
            entry.node.innerHTML = formatLoadingItem(name, progress)
        })
        game.loader.events.addListener('loadall', () => {
            this.showReplayControls()
            this.loading = false
            this.loadingItems.length = 0

            setTimeout(() => {
                this.hideLoading()
                this.clearLoadingLog()
            }, 2000)
            
        })

        this.dom.play.addEventListener('click', () => {
            if (!game.player.isPlaying || game.player.isPaused) {
                game.player.play()
            } else {
                game.player.pause()
            }
        })
        let onPlayerChange = () => {
            this.dom.play.removeChild(this.dom.play.children[0])
            if (!game.player.isPlaying || game.player.isPaused) {
                this.dom.play.appendChild(this.buttons.play)
            } else {
                this.dom.play.appendChild(this.buttons.pause)
            }
        }
        game.player.events.addListener('play', onPlayerChange)
        game.player.events.addListener('pause', onPlayerChange)
        game.player.events.addListener('stop', onPlayerChange)
        this.dom.speedDown.addEventListener('click', () => {
            if (!game.player) return
            game.player.speedDown()
        })
        this.dom.speedUp.addEventListener('click', () => {
            if (!game.player) return
            game.player.speedUp()
        })

        let toggleFullscreen = () => {
            this.dom.fullscreen.removeChild(this.dom.fullscreen.children[0])
            if (Fullscreen.element() === root) {
                this.dom.fullscreen.appendChild(this.buttons.fullscreen)
                Fullscreen.exit()
            } else {
                this.dom.fullscreen.appendChild(this.buttons.smallscreen)
                Fullscreen.enter(root)
            }
        }

        let toggleSettingsMenu = () => {
            if (this.dom.settingsMenu.style.display === 'block') {
                this.dom.settingsMenu.style.display = 'none'
            } else {
                this.dom.settingsMenu.style.display = 'block'
            }
        }
        
        this.dom.fullscreen.addEventListener('click', toggleFullscreen)

        let progressBarLastUpdate = 0
        let timeUpdate = 0
        game.events.addListener('postupdate', () => {
            let time = Time.now()
            if (time - progressBarLastUpdate >= 100) {
                let p = game.player
                if (p.replay) {
                    let pnt = p.currentTime / p.replay.length * 100
                    this.dom.progressBarKnob.style.left = `${pnt}%`
                    this.dom.progressLine.style.right = `${100 - pnt}%`
                }

                progressBarLastUpdate = time
            }
            
            if (time - timeUpdate >= 1000) {
                let p = game.player
                if (p.replay) {
                    let currentTime = Time.formatTime(p.currentTime)
                    let totalTime = Time.formatTime(p.replay.length)
                    this.dom.time.innerText = `${currentTime} / ${totalTime}`
                }
            }
        })
        this.dom.progressBar.addEventListener('click', (e) => {
            if (!this.game.player.isPlaying) {
                // call play twice to play and then to pause
                this.game.player.pause()
            }
            let bb = e.currentTarget.getBoundingClientRect()
            let percent = ((e.pageX - bb.left) / e.currentTarget.offsetWidth) * 100
            game.player.seekByPercent(percent)
        })
        this.dom.progressBar.addEventListener('mouseover', () => {
            this.dom.progressGhostKnob.style.display = 'block'
            this.dom.progressTime.style.display = 'block'
        })
        this.dom.progressBar.addEventListener('mouseout', () => {
            this.dom.progressGhostKnob.style.display = 'none'
            this.dom.progressTime.style.display = 'none'
        })
        this.dom.progressBar.addEventListener('mousemove', (e) => {
            let bb = e.currentTarget.getBoundingClientRect()
            let parentWidth = e.currentTarget.offsetWidth
            let percent = ((e.pageX - bb.left) / parentWidth) * 100
            percent = Math.max(0, Math.min(100, percent))
            this.dom.progressGhostKnob.style.left = `${percent}%`

            let time = percent * this.game.player.replay.length / 100
            let minutes = Math.floor(time / 60)
            if (minutes < 10) {
                minutes = `0${minutes}`
            }
            let seconds = Math.floor(time - minutes * 60)
            if (seconds < 10) {
                seconds = `0${seconds}`
            }
            
            let timePos = Math.max(14, Math.min(parentWidth - 10, percent * parentWidth / 100))
            this.dom.progressTime.style.left = `${timePos}px`
            this.dom.progressTime.innerText = `${minutes}:${seconds}`
        })

        window.addEventListener('mousedown', (e) => {
            let path = [e.target]
            while (path[path.length - 1].parentElement) {
                path.push(path[path.length - 1].parentElement)
            }

            for (let i = 0; i < path.length; ++i) {
                if (path[i] === this.dom.root) {
                    this.isInFocus = true
                    return
                }
            }

            this.isInFocus = false
        })

        window.addEventListener('keydown', (e) => {
            if (!this.isInFocus) {
                return
            }

            if (game.mode === Game.MODE_REPLAY) {
                if (e.which === 70) {
                    // 70 === 'F'
                    toggleFullscreen()
                } else if (e.which === 74 || e.which === 37) {
                    // 74 === 'J' || 'left arrow'
                    let currentTime = game.player.currentTime
                    game.player.seek(currentTime - 5)
                } else if (e.which === 75 || e.which === 32) {
                    // 74 === 'K' || 'space'
                    if (!game.player.isPlaying || game.player.isPaused) {
                        game.player.play()
                    } else {
                        game.player.pause()
                    }
                } else if (e.which === 76 || e.which === 39) {
                    // 74 === 'L' || 'right arrow'
                    let currentTime = game.player.currentTime
                    game.player.seek(currentTime + 5)
                }

                // TODO:
                // volume up 38
                // volume down 40
            }
        })

        // This may seem silly, but...
        // When I used "click" event it stopped working after third doubleclick
        // on the same spot. So I tried creating my own click using
        // "mousedown" + "mouseup" events and now user can spam doubleclicks
        // on the same spot and player will go in and out of fullscreen
        // as intended.
        let screenPauseDownOnScreen = false
        let screenPauseTimer = 0
        this.dom.screen.addEventListener('mousedown', (e) => {
            if (e.button !== 0) {
                return
            }

            screenPauseDownOnScreen = true
        })
        window.addEventListener('mouseup', (e) => {
            if (e.button !== 0) {
                return
            }

            let path = [e.target]
            while (path[path.length - 1].parentElement) {
                path.push(path[path.length - 1].parentElement)
            }

            if (path[1] !== this.dom.screen) {
                screenPauseDownOnScreen = false
            }
        })
        this.dom.screen.addEventListener('mouseup', (e) => {
            if (e.button !== 0 || !screenPauseDownOnScreen) {
                return
            }

            if (game.mode === Game.MODE_REPLAY) {
                if (screenPauseTimer) {
                    toggleFullscreen()
                    clearTimeout(screenPauseTimer)
                    screenPauseTimer = 0
                    
                } else {
                    screenPauseTimer = 1
                    screenPauseTimer = setTimeout(() => {
                        screenPauseTimer = 0
                        let p = this.game.player
                        if (!p.isPlaying || p.isPaused) {
                            p.play()
                        } else {
                            p.pause()
                        }
                    }, 200)
                }
            }
        })

        let hideControlsTimer = 0
        root.addEventListener('mouseover', () => {
            this.dom.title.style.opacity = 1
            this.dom.controls.style.opacity = 1
        })
        root.addEventListener('mouseout', () => {
            this.dom.title.style.opacity = 0
            this.dom.controls.style.opacity = 0
            if (hideControlsTimer) {
                clearTimeout(hideControlsTimer)
            }
        })
        root.addEventListener('mousemove', () => {
            this.dom.title.style.opacity = 1
            this.dom.controls.style.opacity = 1
            root.style.cursor = 'default'
            clearTimeout(hideControlsTimer)
            hideControlsTimer = setTimeout(() => {
                this.dom.title.style.opacity = 0
                this.dom.controls.style.opacity = 0
                root.style.cursor = 'none'
            }, 3000)
        })

        this.dom.settings.addEventListener('click', toggleSettingsMenu)

        this.dom.modeReplay.addEventListener('click', () => {
            this.selectMode(Game.MODE_REPLAY)
        })
        this.dom.modeFree.addEventListener('click', () => {
            this.selectMode(Game.MODE_FREE)
        })

        game.events.addListener('mapchange', () => {
            if (game.player.replay) {
                this.dom.modeReplay.style.cursor = 'pointer'
                this.dom.modeReplay.style.color = '#fff'
                this.dom.modeReplay.style.textDecoration = 'none'
                this.game.player.isPlaying = false
                this.selectMode(Game.MODE_REPLAY)
            } else {
                this.dom.modeReplay.style.cursor = 'not-allowed'
                this.dom.modeReplay.style.color = '#aaa'
                this.dom.modeReplay.style.textDecoration = 'line-through'
                this.selectMode(Game.MODE_FREE)
            }
        })
    }

    selectMode(mode) {
        switch (mode) {
            case Game.MODE_REPLAY: {
                if (!this.game.player.replay) {
                    break
                }

                this.dom.modeFree.style.background = 'transparent'
                this.dom.modeReplay.style.background = 'rgba(255,255,255,0.2)'
                this.dom.progressBar.style.display = 'block'
                this.dom.leftButtons.style.visibility = 'visible'
                this.dom.settingsMenu.style.bottom = '68px'
                this.showTitle()
                this.game.mode = Game.MODE_REPLAY
                break
            }

            case Game.MODE_FREE: {
                this.dom.modeReplay.style.background = 'transparent'
                this.dom.modeFree.style.background = 'rgba(255,255,255,0.2)'
                this.dom.progressBar.style.display = 'none'
                
                this.dom.leftButtons.style.visibility = 'hidden'
                this.dom.settingsMenu.style.bottom = '54px'
                this.hideTitle()
                if (this.game.player.isPlaying && !this.game.player.isPaused) {
                    this.game.player.pause()
                }
                this.game.mode = Game.MODE_FREE
                break
            }

            default: {
                throw new Error('Invalid mode selected')
            }
        }
    }

    showReplayControls() {
        this.dom.controls.style.display = 'block'
    }

    hideReplayControls() {
        this.dom.controls.style.display = 'none'
    }

    showLoading() {
        this.dom.loading.style.display = 'block'
    }

    hideLoading() {
        this.dom.loading.style.display = 'none'
    }

    clearLoadingLog() {
        this.dom.loadingLog.innerHTML = ''
    }

    showTitle() {
        if (this.title) {
            this.dom.title.style.display = 'block'
        }
    }

    hideTitle() {
        this.dom.title.style.display = 'none'
    }

    setTitle(title) {
        this.title = title
        this.dom.title.innerText = title
    }
}