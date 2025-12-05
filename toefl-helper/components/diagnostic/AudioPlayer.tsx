'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

interface AudioPlayerProps {
  audioUrl: string
  maxPlays?: number
  transcript?: string
}

export function AudioPlayer({ audioUrl, maxPlays = 2, transcript }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [playCount, setPlayCount] = useState(0)
  const [audioError, setAudioError] = useState(false)
  const [showTranscript, setShowTranscript] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime)
    const handleLoadedMetadata = () => setDuration(audio.duration)
    const handleEnded = () => {
      setIsPlaying(false)
      setPlayCount((prev) => prev + 1)
    }
    const handleError = () => {
      setAudioError(true)
      setShowTranscript(true)
    }

    audio.addEventListener('timeupdate', handleTimeUpdate)
    audio.addEventListener('loadedmetadata', handleLoadedMetadata)
    audio.addEventListener('ended', handleEnded)
    audio.addEventListener('error', handleError)

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate)
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
      audio.removeEventListener('ended', handleEnded)
      audio.removeEventListener('error', handleError)
    }
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      if (playCount >= maxPlays) return
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0
  const canPlay = playCount < maxPlays

  return (
    <div className="bg-white p-6 rounded-2xl shadow-soft">
      <audio ref={audioRef} src={audioUrl} />

      {/* Play Count */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🎧</span>
          <span className="text-sm font-semibold text-cocoa-brown">리스닝</span>
        </div>
        <div className="text-sm text-text-secondary">
          재생 횟수: {playCount} / {maxPlays}
        </div>
      </div>

      {/* Audio Error / Transcript */}
      {audioError && transcript && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 p-4 bg-soft-peach rounded-xl"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">📝</span>
            <span className="text-sm font-semibold text-cocoa-brown">
              오디오 스크립트 (개발 모드)
            </span>
          </div>
          <p className="text-sm text-text-primary leading-relaxed whitespace-pre-wrap">
            {transcript}
          </p>
        </motion.div>
      )}

      {/* Progress Bar */}
      {!audioError && (
        <div className="mb-4">
          <div className="w-full h-2 bg-warm-cream rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-mint-green to-honey-brown"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs text-text-secondary">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      )}

      {/* Controls */}
      {!audioError && (
        <div className="flex items-center justify-center gap-4">
          <motion.button
            onClick={togglePlay}
            disabled={!canPlay && !isPlaying}
            className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl ${
              canPlay || isPlaying
                ? 'bg-strawberry-pink text-white shadow-md hover:shadow-lg'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
            whileHover={canPlay || isPlaying ? { scale: 1.05 } : {}}
            whileTap={canPlay || isPlaying ? { scale: 0.95 } : {}}
          >
            {isPlaying ? '⏸️' : '▶️'}
          </motion.button>
        </div>
      )}

      {/* Transcript Toggle Button */}
      {!audioError && transcript && (
        <div className="mt-4">
          <button
            onClick={() => setShowTranscript(!showTranscript)}
            className="text-sm text-honey-brown hover:text-cocoa-brown underline"
          >
            {showTranscript ? '스크립트 숨기기' : '스크립트 보기 (개발용)'}
          </button>
          {showTranscript && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 p-4 bg-warm-cream rounded-xl"
            >
              <p className="text-sm text-text-primary leading-relaxed whitespace-pre-wrap">
                {transcript}
              </p>
            </motion.div>
          )}
        </div>
      )}

      {/* Warning */}
      {playCount >= maxPlays && !isPlaying && !audioError && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-center text-sm text-strawberry-pink"
        >
          재생 횟수를 모두 사용했습니다
        </motion.div>
      )}

      {playCount === maxPlays - 1 && !isPlaying && !audioError && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-center text-sm text-butter-yellow"
        >
          ⚠️ 마지막 재생 기회입니다
        </motion.div>
      )}
    </div>
  )
}
