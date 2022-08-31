Для генерации модуля необходимо в терминале прописать следующую команду
hygen new business --section [path-to-MVP-folder] --name [NAME]
к примеру нам нужно создать новый модуль MVP в business/view/card/tabs (новую вкладку для табов в карточке документа)
hygen new business --section view/card/tabs --name agreement

NAME автоматом подставится в все пути и названия сущностей

!! Важно !!
NAME - писать с маленькой буквы
если в названии модуля 2 слова - использовать в названии camelCase (applicationAgreement)