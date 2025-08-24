import { ICharacterInfo } from "../contexts/CharacterContext";

const useExport = (exportData: ICharacterInfo | null) => {
  const iterateItems = (items: string[] | undefined) => {
    if (!items) return "";
    return items.map((item) => `- ${item}\n`).join("");
  };

  const processDataToText = (data: ICharacterInfo) => {
    if (!data) return "";

    const { descriptor, foci, type } = data;

    let text = "";

    text += `I am a ${descriptor?.name} ${type?.name} who ${foci?.name}\n`;
    text += `\n--- Pools ---\n`;
    text += `Might: ${data.pools.might}\n`;
    text += `Speed: ${data.pools.speed}\n`;
    text += `Intellect: ${data.pools.intellect}\n`;
    text += `\n--- Edge ---\n`;
    text += `Might Edge: ${data.edge.might}\n`;
    text += `Speed Edge: ${data.edge.speed}\n`;
    text += `Intellect Edge: ${data.edge.intellect}\n`;
    text += `\n--- Skills ---\n`;
    text += "\nPracticed Skills:\n";
    text += iterateItems(type?.skills?.practiced);
    text += "\n\nTrained Skills:\n";
    text += iterateItems(foci?.skills?.trained);
    text += iterateItems(descriptor?.skills?.trained);
    text += iterateItems(type?.skills?.trained);
    text += "\n\nInabilities Skills:\n";
    text += iterateItems(type?.skills?.inability);
    text += iterateItems(descriptor?.skills?.inability);
    text += iterateItems(foci?.skills?.inability);
    text += `\n\n--- Abilities ---\n`;
    text += iterateItems(type?.fixedability);
    text += iterateItems(descriptor?.abilities);
    text += iterateItems(foci?.abilities);
    text += iterateItems(data?.abilities ?? undefined);
    text += `\n\n--- Additional Information ---\n`;
    text += `\nArmor:\n`;
    text += `${(descriptor?.armor ?? 0) + (foci?.armor ?? 0)}\n`;
    text += `\nEquipment:\n`;
    text += iterateItems(foci?.equipment);
    text += iterateItems(descriptor?.equipment);
    text += iterateItems(type?.equipment);
    text += `\n\nCyphers:\n`;
    text += iterateItems(type?.cyphers);
    text += `\n\nCypher Limit:\n`;
    text += `${type?.cypherlimit ?? 0}\n`;
    text += `\nOddities:\n`;
    text += iterateItems(type?.oddities);
    text += iterateItems(foci?.oddities);
    text += `\n\nExtras:\n`;
    text += iterateItems(foci?.extras);
    text += iterateItems(descriptor?.extras);
    text += `\n\n--- References ---\n`;
    text += `\n${type?.name}:\n`;
    text += `- ${type?.sourcebook} (p.${type?.page})\n`
    text += `\n${foci?.name}:\n`;
    text += `- ${foci?.sourcebook} (p.${foci?.page})\n`
    text += `\n${descriptor?.name}:\n`;
    text += `- ${descriptor?.sourcebook} (p.${descriptor?.page})\n`
    
    return text;
  };

  const handleExportTXT = () => {
    if (!exportData) return;

    const processedText = processDataToText(exportData);
    const dataStr =
      "data:text/plain;charset=utf-8," + encodeURIComponent(processedText);
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "character.txt");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const handleExportJSON = () => {
    if (!exportData) return;

    const dataToExport = {
      type: exportData.type,
      descriptor: exportData.descriptor,
      focus: exportData.foci,
      pools: exportData.pools,
      edge: exportData.edge,
    }

    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(dataToExport, null, 2));
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "character.json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return {
    handleExportTXT,
    handleExportJSON,
  };
};

export { useExport };
