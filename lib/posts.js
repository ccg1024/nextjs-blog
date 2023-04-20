import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getIndexInfoData() {
  const filePath = path.join(postsDirectory, 'indexInfo.md')
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8')
    return {
      infoData: fileContents
    }
  } catch (err) {
    console.log(err)
  }
}

export function getAllNotes() {
  const notesDirectory = path.join(postsDirectory, 'notes')
  const fileNames = fs.readdirSync(notesDirectory)
  const allNotesData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(notesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data
    }
  })

  return allNotesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    }
    return -1
  })
}

export function getNoteList() {
  const notesDirectory = path.join(postsDirectory, 'notes')
  const fileNames = fs.readdirSync(notesDirectory)

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export function getNoteData(id) {
  const notesDirectory = path.join(postsDirectory, 'notes')
  const fullPath = path.join(notesDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)

  return {
    id,
    content: matterResult.content,
    ...matterResult.data
  }
}

export function getAllWorks() {
  const notesDirectory = path.join(postsDirectory, 'works')
  const fileNames = fs.readdirSync(notesDirectory)
  const allNotesData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(notesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data
    }
  })

  return allNotesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    }
    return -1
  })
}

export function getWorkList() {
  const notesDirectory = path.join(postsDirectory, 'works')
  const fileNames = fs.readdirSync(notesDirectory)

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export function getWorkData(id) {
  const notesDirectory = path.join(postsDirectory, 'works')
  const fullPath = path.join(notesDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)

  return {
    id,
    content: matterResult.content,
    ...matterResult.data
  }
}
