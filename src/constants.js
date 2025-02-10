export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3",
};

export const CODE_SNIPPETS = {
  javascript: `\nfunction greet(name) {\n\tconsole.log("Hiii " + name + ", Yug This side I hope you enjoy this project and find good use for it");\n}\n\ngreet("Anu");\n`,
  typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hiii " + data.name + ", Yug This side I hope you enjoy this project and find good use for it");\n}\n\ngreet({ name: "Anu" });\n`,
  python: `\ndef greet(name):\n\tprint("Hiii " + name + ", Yug This side I hope you enjoy this project and find good use for it")\n\ngreet("Anu")\n`,
  java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hiii Anu, Yug This side I hope you enjoy this project and find good use for it");\n\t}\n}\n`,
  csharp:
    'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hiii Anu, Yug This side I hope you enjoy this project and find good use for it");\n\t\t}\n\t}\n}\n',
  php: "<?php\n\n$name = 'Anu';\necho 'Hiii ' . $name . ', Yug This side I hope you enjoy this project and find good use for it';\n",
};
