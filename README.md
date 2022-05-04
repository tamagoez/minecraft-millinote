# Minecraft WikiNote [![CodeFactor](https://www.codefactor.io/repository/github/tamagoez/minecraft-ripenote/badge)](https://www.codefactor.io/repository/github/tamagoez/minecraft-ripenote)

初心者と一緒に書いていく詳しいノート。  
Note which making together with begginer player.

[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=tamagoez_minecraft-wikinote)](https://sonarcloud.io/summary/new_code?id=tamagoez_minecraft-wikinote)  
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=tamagoez_minecraft-wikinote&metric=bugs)](https://sonarcloud.io/summary/new_code?id=tamagoez_minecraft-wikinote)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=tamagoez_minecraft-wikinote&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=tamagoez_minecraft-wikinote)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=tamagoez_minecraft-wikinote&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=tamagoez_minecraft-wikinote)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=tamagoez_minecraft-wikinote&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=tamagoez_minecraft-wikinote)  
[![Replace Tag & Push](https://github.com/tamagoez/minecraft-wikinote/actions/workflows/replacetag_push.yml/badge.svg)](https://github.com/tamagoez/minecraft-wikinote/actions/workflows/replacetag_push.yml)


## お願い(今の所読む人いなさそう...)
Vercelが勝手に動いてしまうのが好きではないので、[`/files/vercel-ignored-build-step.sh`](https://github.com/tamagoez/minecraft-wikinote/blob/main/files/vercel-ignored-build-step.sh)を使って、コミットメッセージに **`deploy`** 又は **`*`** が含まれるときのみデプロイされます。  

**`documents`フォルダー内を編集した場合は、`deploy` `*`をコミットメッセージに含めないでください!**  
GitHub Actionsが**10分毎に処理を行い**、`deploy`を付けてpullするので不要です。
`README.md`や一時的な保存の場合も含めないでください。

---

## 技術的な面について
多分全然カッコイイコードは書いていません。  
フレームワークは**Next.js**を使用して、**Vercel**でデプロイしています。  
`@next/mdx`を使ってmdxファイルをパースし、`@mdx-js/react`で`Tailwindcss`を使った独自コンポーネントに変換しています。  
`sitemap.xml`は一々手で変更するのは手間がかかりミスする可能性もあるので、`next-sitemap`を使用して自動生成しています。

## 謝辞(敬語略)
### [Minecraft](https://www.minecraft.net)
Minecraftを開発した**Mojang AB**及び**Microsoft**に感謝申し上げます。
### [Next.js](https://nextjs.org) と [Vercel](https://vercel.com)
無料で爆速のサイトを運営してくださる**Vercel**に感謝申し上げます。  
また、軽量なページを生成してくださる**Next.js**にも感謝申し上げます。
### [doanryo](https://github.com/doanryo)
そもそもNext.jsやVercelを知ったのは、**ナポアンのマイクラ**を知ったからでした。  
このリポジトリも過去作られていた**ASOBINON**をインスパイアさせて頂いたものです。  
素晴らしい出会いをもたらしてくださった**doanryo**に最大の感謝を申し上げます。
