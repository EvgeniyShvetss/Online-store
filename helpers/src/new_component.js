/* eslint-disable no-console */
const readline = require("readline")
const path = require("path")
const fs = require("fs")

const basePathArgs = [__dirname, "../..", "src", "components"]

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const nameTypes = {
  delimiterSplitter: null,
  camelCase: null,
  pascalCase: null,
  lodashSplitter: null,
}

const isFunctionalComponent = process.argv[2] === "functional=true"

// Ask User to Input New Component Name
rl.question("Enter new Component Name: ", async (name) => {
  // Error
  if (isNameEmpty(name)) {
    console.log("Component Name Can't be empty")
    done()
  } else {
    rl.question(
      '\nComponent will be created in "components" folder. \n You can specify nesting folders by type it names splitted by space. \n Example: "common" "pages routes"\n',
      async (folders) => {
        const basePath = path.join(...basePathArgs.concat(folders.split(" ")))
        const componentName = getComponentNameSplittedByWords(name) // to lower case component name
        const splittedName = splitName(componentName)
        const pascalCaseName = getPascalCaseName(splittedName)
        const componentPath = path.join(basePath, pascalCaseName) // define component path
        if ((await checkIfDirectoryExists(basePath)) === true) {
          if ((await checkIfDirectoryExists(componentPath)) === true) {
            // Error: component already exists
            console.error(
              "Component is already exists. Please use another name"
            )
          } else {
            // Success: component is not exists - create new component
            console.log("Creating...")
            createComponent(componentPath, pascalCaseName, splittedName)
            const subFoldersArr = folders.split(" ")
            const camelCaseName = getCamelCaseName(splittedName)
            const subFoldersPath =
              folders.trim().length > 0 ? `/${subFoldersArr.join("/")}` : ""
          }
        } else {
          console.error("Invalid path to folder")
        }
        done()
      }
    )
  }
})

function isNameEmpty(name) {
  return name === ""
}

function splitName(name) {
  return name.split(/\s|-|_/)
}

function checkIfDirectoryExists(componentsPath) {
  return new Promise((resolve) => {
    let result = false

    console.log("Checking... ", componentsPath)

    fs.stat(componentsPath, (err) => {
      // Directory is already exists
      if (err === null) {
        result = true
      }

      resolve(result)
    })
  })
}

function createComponent(componentPath, fileName, splittedName) {
  // Create  Component Directory
  fs.mkdirSync(componentPath)

  // Create Component Files (name.component.scss)
  fs.writeFileSync(
    path.join(componentPath, `${fileName}.jsx`),
    tsxContent(splittedName)
  )
  // fs.writeFileSync(
  //   path.join(componentPath, `${fileName}.test.js`),
  //   testContent(splittedName)
  // )
  fs.writeFileSync(
    path.join(componentPath, "index.js"),
    indexContent(splittedName)
  )
  fs.writeFileSync(
    path.join(
      componentPath,
      `${fileName[0].toLowerCase() + fileName.slice(1)}.scss`
    ),
    scssContent(splittedName)
  )

  console.log("Success")
}

function tsxContent(splittedName) {
  const template = fs.readFileSync(
    `../templates/new${isFunctionalComponent ? "_f" : ""}_component.jsx.tpl`,
    {
      encoding: "utf-8",
    }
  )
  return parseAndReplace(template, splittedName)
}

function testContent(splittedName) {
  const template = fs.readFileSync("../templates/new_component.test.js.tpl", {
    encoding: "utf-8",
  })
  return parseAndReplace(template, splittedName)
}

function scssContent(splittedName) {
  const template = fs.readFileSync("../templates/new_component.tpl", {
    encoding: "utf-8",
  })
  return parseAndReplace(template, splittedName)
}

function indexContent(splittedName) {
  const template = fs.readFileSync("../templates/new_component.index.js.tpl", {
    encoding: "utf-8",
  })
  return parseAndReplace(template, splittedName)
}

function parseAndReplace(template, splittedName) {
  const replacements = {
    delimiterSplitter: getDelimiterSplittedName(splittedName), // test-button
    camelCase: getCamelCaseName(splittedName), // testButton
    pascalCase: getPascalCaseName(splittedName),
    styleName: `${getCamelCaseName(splittedName)}`,
    lodashSplitter: getLodashSplittedName(splittedName), // test_button
  }

  nameTypes.delimiterSplitter = replacements.delimiterSplitter
  nameTypes.camelCase = replacements.camelCase
  nameTypes.pascalCase = replacements.pascalCase
  nameTypes.styleName = replacements.styleName
  nameTypes.lodashSplitter = replacements.lodashSplitter
  Object.keys(replacements).forEach((key) => {
    // eslint-disable-next-line no-param-reassign
    template = replace(
      template,
      new RegExp(`%%${key}%%`, "g"),
      replacements[key]
    )
  })

  return template
}

function getComponentNameSplittedByWords(str) {
  let name = str.toLowerCase()
  if (str[0].toUpperCase() === str[0] && str.split(" ").length === 1) {
    name = str
      .split(/(?=[A-Z])/)
      .join(" ")
      .toLowerCase()
  }

  return name
}

function getDelimiterSplittedName(splittedName) {
  return splittedName.join("-")
}

function getCamelCaseName(splittedName) {
  return splittedName
    .map((item, index) => (index > 0 ? capitalize(item) : item))
    .join("")
}

function getPascalCaseName(splittedName) {
  return splittedName.map((item) => capitalize(item)).join("")
}

function getLodashSplittedName(splittedName) {
  return splittedName.join("_")
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function replace(str, re, data) {
  return str.replace(re, data)
}

function done() {
  console.log("exit")

  rl.close()
}
