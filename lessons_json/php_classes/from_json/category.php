<?php
// category.php => produces from json using sample file '6' with https://jacobdekeizer.github.io/json-to-php-generator/#/

class RootObject
{
	public Category $category;
	/** @var Lessons[] */
	public array $lessons;
	/** @var Dialogues[] */
	public array $dialogues;
	/** @var Vocabularies[] */
	public array $vocabularies;
	public array $oxfordTests;
	public array $reviewLessons;

	/**
	 * @param Lessons[] $lessons
	 * @param Dialogues[] $dialogues
	 * @param Vocabularies[] $vocabularies
	 */
	public function __construct(
		Category $category,
		array $lessons,
		array $dialogues,
		array $vocabularies,
		array $oxfordTests,
		array $reviewLessons
	) {
		$this->category = $category;
		$this->lessons = $lessons;
		$this->dialogues = $dialogues;
		$this->vocabularies = $vocabularies;
		$this->oxfordTests = $oxfordTests;
		$this->reviewLessons = $reviewLessons;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			Category::fromJson($data['category']),
			array_map(static function($data) {
				return Lessons::fromJson($data);
			}, $data['lessons']),
			array_map(static function($data) {
				return Dialogues::fromJson($data);
			}, $data['dialogues']),
			array_map(static function($data) {
				return Vocabularies::fromJson($data);
			}, $data['vocabularies']),
			$data['oxfordTests'],
			$data['reviewLessons']
		);
	}
}

class Category
{
	public int $id;
	public null $customIndex;
	public int $progressType;
	public UiModifiers $uiModifiers;
	public null $modifiers;
	public string $name;
	public int $countLesson;
	public int $countDialogue;
	public int $countVocabulary;
	public int $countOxfordTest;
	public int $countReviewLesson;
	/** @var int[] */
	public array $lessons;
	/** @var int[] */
	public array $dialogues;
	/** @var int[] */
	public array $vocabularies;
	public array $oxfordTests;
	public array $reviewLessons;
	public bool $disabled;
	public int $countDone;
	public float $time;

	/**
	 * @param int[] $lessons
	 * @param int[] $dialogues
	 * @param int[] $vocabularies
	 */
	public function __construct(
		int $id,
		null $customIndex,
		int $progressType,
		UiModifiers $uiModifiers,
		null $modifiers,
		string $name,
		int $countLesson,
		int $countDialogue,
		int $countVocabulary,
		int $countOxfordTest,
		int $countReviewLesson,
		array $lessons,
		array $dialogues,
		array $vocabularies,
		array $oxfordTests,
		array $reviewLessons,
		bool $disabled,
		int $countDone,
		float $time
	) {
		$this->id = $id;
		$this->customIndex = $customIndex;
		$this->progressType = $progressType;
		$this->uiModifiers = $uiModifiers;
		$this->modifiers = $modifiers;
		$this->name = $name;
		$this->countLesson = $countLesson;
		$this->countDialogue = $countDialogue;
		$this->countVocabulary = $countVocabulary;
		$this->countOxfordTest = $countOxfordTest;
		$this->countReviewLesson = $countReviewLesson;
		$this->lessons = $lessons;
		$this->dialogues = $dialogues;
		$this->vocabularies = $vocabularies;
		$this->oxfordTests = $oxfordTests;
		$this->reviewLessons = $reviewLessons;
		$this->disabled = $disabled;
		$this->countDone = $countDone;
		$this->time = $time;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['id'],
			$data['customIndex'] ?? null,
			$data['progressType'],
			UiModifiers::fromJson($data['uiModifiers']),
			$data['modifiers'] ?? null,
			$data['name'],
			$data['countLesson'],
			$data['countDialogue'],
			$data['countVocabulary'],
			$data['countOxfordTest'],
			$data['countReviewLesson'],
			$data['lessons'],
			$data['dialogues'],
			$data['vocabularies'],
			$data['oxfordTests'],
			$data['reviewLessons'],
			$data['disabled'],
			$data['countDone'],
			$data['time']
		);
	}
}

class UiModifiers
{
	public bool $learningUnitNamesAndIndex;
	public bool $vocabularyRecapSubtitle;

	public function __construct(bool $learningUnitNamesAndIndex, bool $vocabularyRecapSubtitle)
	{
		$this->learningUnitNamesAndIndex = $learningUnitNamesAndIndex;
		$this->vocabularyRecapSubtitle = $vocabularyRecapSubtitle;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['learningUnitNamesAndIndex'],
			$data['vocabularyRecapSubtitle']
		);
	}
}

class Lessons
{
	public int $id;
	public int $i;
	public int $index;
	public int $positionIndex;
	public null $unitNumber;
	public int $unitType;
	public int $unitStyle;
	public int $unitScope;
	public int $category;
	public int $categoryId;
	public string $name;
	public bool $disabled;
	public bool $done;
	public int|bool $stars;
	public int $countDone;

	public function __construct(
		int $id,
		int $i,
		int $index,
		int $positionIndex,
		null $unitNumber,
		int $unitType,
		int $unitStyle,
		int $unitScope,
		int $category,
		int $categoryId,
		string $name,
		bool $disabled,
		bool $done,
		int|bool $stars,
		int $countDone
	) {
		$this->id = $id;
		$this->i = $i;
		$this->index = $index;
		$this->positionIndex = $positionIndex;
		$this->unitNumber = $unitNumber;
		$this->unitType = $unitType;
		$this->unitStyle = $unitStyle;
		$this->unitScope = $unitScope;
		$this->category = $category;
		$this->categoryId = $categoryId;
		$this->name = $name;
		$this->disabled = $disabled;
		$this->done = $done;
		$this->stars = $stars;
		$this->countDone = $countDone;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['id'],
			$data['i'],
			$data['index'],
			$data['positionIndex'],
			$data['unitNumber'] ?? null,
			$data['unitType'],
			$data['unitStyle'],
			$data['unitScope'],
			$data['category'],
			$data['categoryID'],
			$data['name'],
			$data['disabled'],
			$data['done'],
			$data['stars'],
			$data['countDone']
		);
	}
}

class Dialogues
{
	public int $id;
	public int $i;
	public int $index;
	public int $positionIndex;
	public int $category;
	public int $categoryId;
	public int $categoryModifiers;
	public string $name;
	public bool $done;
	public bool $disabled;
	public int $countItem;
	public int $countDone;
	public int $countWords;
	public int $countPhrases;

	public function __construct(
		int $id,
		int $i,
		int $index,
		int $positionIndex,
		int $category,
		int $categoryId,
		int $categoryModifiers,
		string $name,
		bool $done,
		bool $disabled,
		int $countItem,
		int $countDone,
		int $countWords,
		int $countPhrases
	) {
		$this->id = $id;
		$this->i = $i;
		$this->index = $index;
		$this->positionIndex = $positionIndex;
		$this->category = $category;
		$this->categoryId = $categoryId;
		$this->categoryModifiers = $categoryModifiers;
		$this->name = $name;
		$this->done = $done;
		$this->disabled = $disabled;
		$this->countItem = $countItem;
		$this->countDone = $countDone;
		$this->countWords = $countWords;
		$this->countPhrases = $countPhrases;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['id'],
			$data['i'],
			$data['index'],
			$data['positionIndex'],
			$data['category'],
			$data['categoryID'],
			$data['categoryModifiers'],
			$data['name'],
			$data['done'],
			$data['disabled'],
			$data['countItem'],
			$data['countDone'],
			$data['countWords'],
			$data['countPhrases']
		);
	}
}

class Vocabularies
{
	public int $id;
	public int $i;
	public int $index;
	public int $positionIndex;
	public int $category;
	public int $categoryId;
	public null $name;
	public bool $disabled;
	public bool $done;
	public int $stars;
	public int $countDone;

	public function __construct(
		int $id,
		int $i,
		int $index,
		int $positionIndex,
		int $category,
		int $categoryId,
		null $name,
		bool $disabled,
		bool $done,
		int $stars,
		int $countDone
	) {
		$this->id = $id;
		$this->i = $i;
		$this->index = $index;
		$this->positionIndex = $positionIndex;
		$this->category = $category;
		$this->categoryId = $categoryId;
		$this->name = $name;
		$this->disabled = $disabled;
		$this->done = $done;
		$this->stars = $stars;
		$this->countDone = $countDone;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['id'],
			$data['i'],
			$data['index'],
			$data['positionIndex'],
			$data['category'],
			$data['categoryID'],
			$data['name'] ?? null,
			$data['disabled'],
			$data['done'],
			$data['stars'],
			$data['countDone']
		);
	}
}

?>
