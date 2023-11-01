<?php

// produced using '601' json file, see lesson_sample.json file.

class RootObject
{
	public Lesson $lesson;
	/** @var Quizzes[] */
	public array $quizzes;

	/**
	 * @param Quizzes[] $quizzes
	 */
	public function __construct(Lesson $lesson, array $quizzes)
	{
		$this->lesson = $lesson;
		$this->quizzes = $quizzes;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			Lesson::fromJson($data['lesson']),
			array_map(static function($data) {
				return Quizzes::fromJson($data);
			}, $data['quizzes'])
		);
	}
}

class Lesson
{
	public int $id;
	public int $index;
	public null $unitNumber;
	public int $unitType;
	public int $unitStyle;
	public int $unitScope;
	public int $category;
	public int $categoryId;
	public string $name;
	public bool $isCourse;
	public bool $disabled;
	public bool $done;
	public int $stars;
	public string $difficulty;
	public int $countQuiz;
	public int $countWords;
	public int $countPhrases;
	public int $countDone;
	/** @var int[] */
	public array $quizzes;

	/**
	 * @param int[] $quizzes
	 */
	public function __construct(
		int $id,
		int $index,
		null $unitNumber,
		int $unitType,
		int $unitStyle,
		int $unitScope,
		int $category,
		int $categoryId,
		string $name,
		bool $isCourse,
		bool $disabled,
		bool $done,
		int $stars,
		string $difficulty,
		int $countQuiz,
		int $countWords,
		int $countPhrases,
		int $countDone,
		array $quizzes
	) {
		$this->id = $id;
		$this->index = $index;
		$this->unitNumber = $unitNumber;
		$this->unitType = $unitType;
		$this->unitStyle = $unitStyle;
		$this->unitScope = $unitScope;
		$this->category = $category;
		$this->categoryId = $categoryId;
		$this->name = $name;
		$this->isCourse = $isCourse;
		$this->disabled = $disabled;
		$this->done = $done;
		$this->stars = $stars;
		$this->difficulty = $difficulty;
		$this->countQuiz = $countQuiz;
		$this->countWords = $countWords;
		$this->countPhrases = $countPhrases;
		$this->countDone = $countDone;
		$this->quizzes = $quizzes;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['id'],
			$data['index'],
			$data['unitNumber'] ?? null,
			$data['unitType'],
			$data['unitStyle'],
			$data['unitScope'],
			$data['category'],
			$data['categoryID'],
			$data['name'],
			$data['isCourse'],
			$data['disabled'],
			$data['done'],
			$data['stars'],
			$data['difficulty'],
			$data['countQuiz'],
			$data['countWords'],
			$data['countPhrases'],
			$data['countDone'],
			$data['quizzes']
		);
	}
}

class Quizzes
{
	public int $id;
	public int $lesson;
	public string $type;
	public int $modifiers;
	public int $wordId;
	/** @var int[] */
	public array $alternates;
	/** @var Sols[] */
	public array $sols;
	/** @var Alts[]|null */
	public ?array $alts;
	/** @var Tokens[]|null */
	public ?array $tokens;
	public ?bool $tokensEqualSize;
	/** @var string[]|null */
	public ?array $ord;
	public ?string $completeToken;
	/** @var TokensPhonetic[]|null */
	public ?array $tokensPhonetic;
	/** @var string[]|null */
	public ?array $ordPhonetic;
	public ?QuizSkipData $quizSkipData;

	/**
	 * @param int[] $alternates
	 * @param Sols[] $sols
	 * @param Alts[]|null $alts
	 * @param Tokens[]|null $tokens
	 * @param string[]|null $ord
	 * @param TokensPhonetic[]|null $tokensPhonetic
	 * @param string[]|null $ordPhonetic
	 */
	public function __construct(
		int $id,
		int $lesson,
		string $type,
		int $modifiers,
		int $wordId,
		array $alternates,
		array $sols,
		?array $alts,
		?array $tokens,
		?bool $tokensEqualSize,
		?array $ord,
		?string $completeToken,
		?array $tokensPhonetic,
		?array $ordPhonetic,
		?QuizSkipData $quizSkipData
	) {
		$this->id = $id;
		$this->lesson = $lesson;
		$this->type = $type;
		$this->modifiers = $modifiers;
		$this->wordId = $wordId;
		$this->alternates = $alternates;
		$this->sols = $sols;
		$this->alts = $alts;
		$this->tokens = $tokens;
		$this->tokensEqualSize = $tokensEqualSize;
		$this->ord = $ord;
		$this->completeToken = $completeToken;
		$this->tokensPhonetic = $tokensPhonetic;
		$this->ordPhonetic = $ordPhonetic;
		$this->quizSkipData = $quizSkipData;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['id'],
			$data['lesson'],
			$data['type'],
			$data['modifiers'],
			$data['wordID'],
			$data['alternates'],
			array_map(static function($data) {
				return Sols::fromJson($data);
			}, $data['sols']),
			($data['alts'] ?? null) !== null ? array_map(static function($data) {
				return Alts::fromJson($data);
			}, $data['alts']) : null,
			($data['tokens'] ?? null) !== null ? array_map(static function($data) {
				return Tokens::fromJson($data);
			}, $data['tokens']) : null,
			$data['tokensEqualSize'] ?? null,
			$data['ord'] ?? null,
			$data['completeToken'] ?? null,
			($data['tokensPhonetic'] ?? null) !== null ? array_map(static function($data) {
				return TokensPhonetic::fromJson($data);
			}, $data['tokensPhonetic']) : null,
			$data['ordPhonetic'] ?? null,
			($data['quizSkipData'] ?? null) !== null ? QuizSkipData::fromJson($data['quizSkipData']) : null
		);
	}
}

class Sols
{
	public string $key;
	public ?int $audioUpdatedAt;
	public string $text;
	/** @var Dictionary[]|null */
	public ?array $dictionary;
	public ?int $phraseType;
	/** @var TextTokens[]|null */
	public ?array $textTokens;
	public ?string $phonetic;
	/** @var PhoneticTokens[]|null */
	public ?array $phoneticTokens;
	public ?string $image;
	public ?int $imageUpdatedAt;

	/**
	 * @param Dictionary[]|null $dictionary
	 * @param TextTokens[]|null $textTokens
	 * @param PhoneticTokens[]|null $phoneticTokens
	 */
	public function __construct(
		string $key,
		?int $audioUpdatedAt,
		string $text,
		?array $dictionary,
		?int $phraseType,
		?array $textTokens,
		?string $phonetic,
		?array $phoneticTokens,
		?string $image,
		?int $imageUpdatedAt
	) {
		$this->key = $key;
		$this->audioUpdatedAt = $audioUpdatedAt;
		$this->text = $text;
		$this->dictionary = $dictionary;
		$this->phraseType = $phraseType;
		$this->textTokens = $textTokens;
		$this->phonetic = $phonetic;
		$this->phoneticTokens = $phoneticTokens;
		$this->image = $image;
		$this->imageUpdatedAt = $imageUpdatedAt;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['key'],
			$data['audio_updated_at'] ?? null,
			$data['text'],
			($data['dictionary'] ?? null) !== null ? array_map(static function($data) {
				return Dictionary::fromJson($data);
			}, $data['dictionary']) : null,
			$data['phraseType'] ?? null,
			($data['text_tokens'] ?? null) !== null ? array_map(static function($data) {
				return TextTokens::fromJson($data);
			}, $data['text_tokens']) : null,
			$data['phonetic'] ?? null,
			($data['phonetic_tokens'] ?? null) !== null ? array_map(static function($data) {
				return PhoneticTokens::fromJson($data);
			}, $data['phonetic_tokens']) : null,
			$data['image'] ?? null,
			$data['image_updated_at'] ?? null
		);
	}
}

class Dictionary
{
	public string $raw;
	/** @var Translations[] */
	public array $translations;

	/**
	 * @param Translations[] $translations
	 */
	public function __construct(string $raw, array $translations)
	{
		$this->raw = $raw;
		$this->translations = $translations;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['raw'],
			array_map(static function($data) {
				return Translations::fromJson($data);
			}, $data['translations'])
		);
	}
}

class Translations
{
	public string $type;
	public ?string $text;
	public ?string $phonetic;
	public ?Name $name;
	public ?int $id;
	public ?TenseNames $tenseNames;
	public ?Conj $conj;

	public function __construct(
		string $type,
		?string $text,
		?string $phonetic,
		?Name $name,
		?int $id,
		?TenseNames $tenseNames,
		?Conj $conj
	) {
		$this->type = $type;
		$this->text = $text;
		$this->phonetic = $phonetic;
		$this->name = $name;
		$this->id = $id;
		$this->tenseNames = $tenseNames;
		$this->conj = $conj;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['type'],
			$data['text'] ?? null,
			$data['phonetic'] ?? null,
			($data['name'] ?? null) !== null ? Name::fromJson($data['name']) : null,
			$data['id'] ?? null,
			($data['tenseNames'] ?? null) !== null ? TenseNames::fromJson($data['tenseNames']) : null,
			($data['conj'] ?? null) !== null ? Conj::fromJson($data['conj']) : null
		);
	}
}

class Name
{
	public string $t;
	public string $m;
	public string $phonetic;

	public function __construct(
		string $t,
		string $m,
		string $phonetic
	) {
		$this->t = $t;
		$this->m = $m;
		$this->phonetic = $phonetic;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['t'],
			$data['m'],
			$data['phonetic']
		);
	}
}

class TenseNames
{
	public string $pr;
	public string $pa;
	public string $fu;

	public function __construct(
		string $pr,
		string $pa,
		string $fu
	) {
		$this->pr = $pr;
		$this->pa = $pa;
		$this->fu = $fu;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['pr'],
			$data['pa'],
			$data['fu']
		);
	}
}

class Conj
{
	/** @var Pr[] */
	public array $pr;
	/** @var Pa[] */
	public array $pa;
	/** @var Fu[] */
	public array $fu;

	/**
	 * @param Pr[] $pr
	 * @param Pa[] $pa
	 * @param Fu[] $fu
	 */
	public function __construct(
		array $pr,
		array $pa,
		array $fu
	) {
		$this->pr = $pr;
		$this->pa = $pa;
		$this->fu = $fu;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			array_map(static function($data) {
				return Pr::fromJson($data);
			}, $data['pr']),
			array_map(static function($data) {
				return Pa::fromJson($data);
			}, $data['pa']),
			array_map(static function($data) {
				return Fu::fromJson($data);
			}, $data['fu'])
		);
	}
}

class Pr
{
	public T $t;
	public M $m;

	public function __construct(T $t, M $m)
	{
		$this->t = $t;
		$this->m = $m;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			T::fromJson($data['t']),
			M::fromJson($data['m'])
		);
	}
}

class T
{
	public string $key;
	public string $text;
	public string $phonetic;
	public int $audioUpdatedAt;

	public function __construct(
		string $key,
		string $text,
		string $phonetic,
		int $audioUpdatedAt
	) {
		$this->key = $key;
		$this->text = $text;
		$this->phonetic = $phonetic;
		$this->audioUpdatedAt = $audioUpdatedAt;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['key'],
			$data['text'],
			$data['phonetic'],
			$data['audio_updated_at']
		);
	}
}

class M
{
	public string $text;

	public function __construct(string $text)
	{
		$this->text = $text;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['text']
		);
	}
}

class Pa
{
	public T $t;
	public M $m;

	public function __construct(T $t, M $m)
	{
		$this->t = $t;
		$this->m = $m;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			T::fromJson($data['t']),
			M::fromJson($data['m'])
		);
	}
}

class T
{
	public string $key;
	public string $text;
	public string $phonetic;
	public int $audioUpdatedAt;

	public function __construct(
		string $key,
		string $text,
		string $phonetic,
		int $audioUpdatedAt
	) {
		$this->key = $key;
		$this->text = $text;
		$this->phonetic = $phonetic;
		$this->audioUpdatedAt = $audioUpdatedAt;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['key'],
			$data['text'],
			$data['phonetic'],
			$data['audio_updated_at']
		);
	}
}

class M
{
	public string $text;

	public function __construct(string $text)
	{
		$this->text = $text;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['text']
		);
	}
}

class Fu
{
	public T $t;
	public M $m;

	public function __construct(T $t, M $m)
	{
		$this->t = $t;
		$this->m = $m;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			T::fromJson($data['t']),
			M::fromJson($data['m'])
		);
	}
}

class T
{
	public string $key;
	public string $text;
	public string $phonetic;
	public int $audioUpdatedAt;

	public function __construct(
		string $key,
		string $text,
		string $phonetic,
		int $audioUpdatedAt
	) {
		$this->key = $key;
		$this->text = $text;
		$this->phonetic = $phonetic;
		$this->audioUpdatedAt = $audioUpdatedAt;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['key'],
			$data['text'],
			$data['phonetic'],
			$data['audio_updated_at']
		);
	}
}

class M
{
	public string $text;

	public function __construct(string $text)
	{
		$this->text = $text;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['text']
		);
	}
}

class TextTokens
{
	public Raw $raw;
	public Prefix $prefix;
	public Suffix $suffix;
	public Linker $linker;

	public function __construct(
		Raw $raw,
		Prefix $prefix,
		Suffix $suffix,
		Linker $linker
	) {
		$this->raw = $raw;
		$this->prefix = $prefix;
		$this->suffix = $suffix;
		$this->linker = $linker;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			Raw::fromJson($data['raw']),
			Prefix::fromJson($data['prefix']),
			Suffix::fromJson($data['suffix']),
			Linker::fromJson($data['linker'])
		);
	}
}

class Raw
{
	public string $text;
	public int $location;
	public int $length;

	public function __construct(
		string $text,
		int $location,
		int $length
	) {
		$this->text = $text;
		$this->location = $location;
		$this->length = $length;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['text'],
			$data['location'],
			$data['length']
		);
	}
}

class Prefix
{
	public string $text;
	public int $location;
	public int $length;

	public function __construct(
		string $text,
		int $location,
		int $length
	) {
		$this->text = $text;
		$this->location = $location;
		$this->length = $length;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['text'],
			$data['location'],
			$data['length']
		);
	}
}

class Suffix
{
	public string $text;
	public int $location;
	public int $length;

	public function __construct(
		string $text,
		int $location,
		int $length
	) {
		$this->text = $text;
		$this->location = $location;
		$this->length = $length;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['text'],
			$data['location'],
			$data['length']
		);
	}
}

class Linker
{
	public string $text;
	public int $location;
	public int $length;

	public function __construct(
		string $text,
		int $location,
		int $length
	) {
		$this->text = $text;
		$this->location = $location;
		$this->length = $length;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['text'],
			$data['location'],
			$data['length']
		);
	}
}

class PhoneticTokens
{
	public Raw $raw;
	public Prefix $prefix;
	public Suffix $suffix;
	public Linker $linker;

	public function __construct(
		Raw $raw,
		Prefix $prefix,
		Suffix $suffix,
		Linker $linker
	) {
		$this->raw = $raw;
		$this->prefix = $prefix;
		$this->suffix = $suffix;
		$this->linker = $linker;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			Raw::fromJson($data['raw']),
			Prefix::fromJson($data['prefix']),
			Suffix::fromJson($data['suffix']),
			Linker::fromJson($data['linker'])
		);
	}
}

class Raw
{
	public string $text;
	public int $location;
	public int $length;

	public function __construct(
		string $text,
		int $location,
		int $length
	) {
		$this->text = $text;
		$this->location = $location;
		$this->length = $length;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['text'],
			$data['location'],
			$data['length']
		);
	}
}

class Prefix
{
	public string $text;
	public int $location;
	public int $length;

	public function __construct(
		string $text,
		int $location,
		int $length
	) {
		$this->text = $text;
		$this->location = $location;
		$this->length = $length;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['text'],
			$data['location'],
			$data['length']
		);
	}
}

class Suffix
{
	public string $text;
	public int $location;
	public int $length;

	public function __construct(
		string $text,
		int $location,
		int $length
	) {
		$this->text = $text;
		$this->location = $location;
		$this->length = $length;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['text'],
			$data['location'],
			$data['length']
		);
	}
}

class Linker
{
	public string $text;
	public int $location;
	public int $length;

	public function __construct(
		string $text,
		int $location,
		int $length
	) {
		$this->text = $text;
		$this->location = $location;
		$this->length = $length;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['text'],
			$data['location'],
			$data['length']
		);
	}
}

class Alts
{
	public string $key;
	public int $audioUpdatedAt;
	public ?string $image;
	public ?int $imageUpdatedAt;
	public string $text;
	public ?string $phonetic;

	public function __construct(
		string $key,
		int $audioUpdatedAt,
		?string $image,
		?int $imageUpdatedAt,
		string $text,
		?string $phonetic
	) {
		$this->key = $key;
		$this->audioUpdatedAt = $audioUpdatedAt;
		$this->image = $image;
		$this->imageUpdatedAt = $imageUpdatedAt;
		$this->text = $text;
		$this->phonetic = $phonetic;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['key'],
			$data['audio_updated_at'],
			$data['image'] ?? null,
			$data['image_updated_at'] ?? null,
			$data['text'],
			$data['phonetic'] ?? null
		);
	}
}

class Tokens
{
	public string $key;
	public string $text;
	public ?Raw $raw;
	public ?Prefix $prefix;
	public ?Suffix $suffix;
	public ?Linker $linker;
	public ?int $group;

	public function __construct(
		string $key,
		string $text,
		?Raw $raw,
		?Prefix $prefix,
		?Suffix $suffix,
		?Linker $linker,
		?int $group
	) {
		$this->key = $key;
		$this->text = $text;
		$this->raw = $raw;
		$this->prefix = $prefix;
		$this->suffix = $suffix;
		$this->linker = $linker;
		$this->group = $group;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['key'],
			$data['text'],
			($data['raw'] ?? null) !== null ? Raw::fromJson($data['raw']) : null,
			($data['prefix'] ?? null) !== null ? Prefix::fromJson($data['prefix']) : null,
			($data['suffix'] ?? null) !== null ? Suffix::fromJson($data['suffix']) : null,
			($data['linker'] ?? null) !== null ? Linker::fromJson($data['linker']) : null,
			$data['group'] ?? null
		);
	}
}

class Raw
{
	public string $text;
	public int $location;
	public int $length;

	public function __construct(
		string $text,
		int $location,
		int $length
	) {
		$this->text = $text;
		$this->location = $location;
		$this->length = $length;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['text'],
			$data['location'],
			$data['length']
		);
	}
}

class Prefix
{
	public string $text;
	public int $location;
	public int $length;

	public function __construct(
		string $text,
		int $location,
		int $length
	) {
		$this->text = $text;
		$this->location = $location;
		$this->length = $length;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['text'],
			$data['location'],
			$data['length']
		);
	}
}

class Suffix
{
	public string $text;
	public int $location;
	public int $length;

	public function __construct(
		string $text,
		int $location,
		int $length
	) {
		$this->text = $text;
		$this->location = $location;
		$this->length = $length;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['text'],
			$data['location'],
			$data['length']
		);
	}
}

class Linker
{
	public string $text;
	public int $location;
	public int $length;

	public function __construct(
		string $text,
		int $location,
		int $length
	) {
		$this->text = $text;
		$this->location = $location;
		$this->length = $length;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['text'],
			$data['location'],
			$data['length']
		);
	}
}

class TokensPhonetic
{
	public string $key;
	public string $text;
	public ?Raw $raw;
	public ?Prefix $prefix;
	public ?Suffix $suffix;
	public ?Linker $linker;
	public ?int $group;

	public function __construct(
		string $key,
		string $text,
		?Raw $raw,
		?Prefix $prefix,
		?Suffix $suffix,
		?Linker $linker,
		?int $group
	) {
		$this->key = $key;
		$this->text = $text;
		$this->raw = $raw;
		$this->prefix = $prefix;
		$this->suffix = $suffix;
		$this->linker = $linker;
		$this->group = $group;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['key'],
			$data['text'],
			($data['raw'] ?? null) !== null ? Raw::fromJson($data['raw']) : null,
			($data['prefix'] ?? null) !== null ? Prefix::fromJson($data['prefix']) : null,
			($data['suffix'] ?? null) !== null ? Suffix::fromJson($data['suffix']) : null,
			($data['linker'] ?? null) !== null ? Linker::fromJson($data['linker']) : null,
			$data['group'] ?? null
		);
	}
}

class Raw
{
	public string $text;
	public int $location;
	public int $length;

	public function __construct(
		string $text,
		int $location,
		int $length
	) {
		$this->text = $text;
		$this->location = $location;
		$this->length = $length;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['text'],
			$data['location'],
			$data['length']
		);
	}
}

class Prefix
{
	public string $text;
	public int $location;
	public int $length;

	public function __construct(
		string $text,
		int $location,
		int $length
	) {
		$this->text = $text;
		$this->location = $location;
		$this->length = $length;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['text'],
			$data['location'],
			$data['length']
		);
	}
}

class Suffix
{
	public string $text;
	public int $location;
	public int $length;

	public function __construct(
		string $text,
		int $location,
		int $length
	) {
		$this->text = $text;
		$this->location = $location;
		$this->length = $length;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['text'],
			$data['location'],
			$data['length']
		);
	}
}

class Linker
{
	public string $text;
	public int $location;
	public int $length;

	public function __construct(
		string $text,
		int $location,
		int $length
	) {
		$this->text = $text;
		$this->location = $location;
		$this->length = $length;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['text'],
			$data['location'],
			$data['length']
		);
	}
}

class QuizSkipData
{
	public string $type;
	public int $modifiers;
	/** @var Tokens[] */
	public array $tokens;
	public bool $tokensEqualSize;
	/** @var string[] */
	public array $ord;
	/** @var Sols[] */
	public array $sols;

	/**
	 * @param Tokens[] $tokens
	 * @param string[] $ord
	 * @param Sols[] $sols
	 */
	public function __construct(
		string $type,
		int $modifiers,
		array $tokens,
		bool $tokensEqualSize,
		array $ord,
		array $sols
	) {
		$this->type = $type;
		$this->modifiers = $modifiers;
		$this->tokens = $tokens;
		$this->tokensEqualSize = $tokensEqualSize;
		$this->ord = $ord;
		$this->sols = $sols;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['type'],
			$data['modifiers'],
			array_map(static function($data) {
				return Tokens::fromJson($data);
			}, $data['tokens']),
			$data['tokensEqualSize'],
			$data['ord'],
			array_map(static function($data) {
				return Sols::fromJson($data);
			}, $data['sols'])
		);
	}
}

class Tokens
{
	public string $key;
	public string $text;
	public Raw $raw;
	public Prefix $prefix;
	public Suffix $suffix;
	public Linker $linker;

	public function __construct(
		string $key,
		string $text,
		Raw $raw,
		Prefix $prefix,
		Suffix $suffix,
		Linker $linker
	) {
		$this->key = $key;
		$this->text = $text;
		$this->raw = $raw;
		$this->prefix = $prefix;
		$this->suffix = $suffix;
		$this->linker = $linker;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['key'],
			$data['text'],
			Raw::fromJson($data['raw']),
			Prefix::fromJson($data['prefix']),
			Suffix::fromJson($data['suffix']),
			Linker::fromJson($data['linker'])
		);
	}
}

class Raw
{
	public string $text;
	public int $location;
	public int $length;

	public function __construct(
		string $text,
		int $location,
		int $length
	) {
		$this->text = $text;
		$this->location = $location;
		$this->length = $length;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['text'],
			$data['location'],
			$data['length']
		);
	}
}

class Prefix
{
	public string $text;
	public int $location;
	public int $length;

	public function __construct(
		string $text,
		int $location,
		int $length
	) {
		$this->text = $text;
		$this->location = $location;
		$this->length = $length;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['text'],
			$data['location'],
			$data['length']
		);
	}
}

class Suffix
{
	public string $text;
	public int $location;
	public int $length;

	public function __construct(
		string $text,
		int $location,
		int $length
	) {
		$this->text = $text;
		$this->location = $location;
		$this->length = $length;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['text'],
			$data['location'],
			$data['length']
		);
	}
}

class Linker
{
	public string $text;
	public int $location;
	public int $length;

	public function __construct(
		string $text,
		int $location,
		int $length
	) {
		$this->text = $text;
		$this->location = $location;
		$this->length = $length;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['text'],
			$data['location'],
			$data['length']
		);
	}
}

class Sols
{
	public string $key;
	public int $audioUpdatedAt;
	public string $text;
	public ?string $phonetic;
	/** @var Dictionary[]|null */
	public ?array $dictionary;
	public ?int $phraseType;
	/** @var TextTokens[]|null */
	public ?array $textTokens;
	/** @var PhoneticTokens[]|null */
	public ?array $phoneticTokens;

	/**
	 * @param Dictionary[]|null $dictionary
	 * @param TextTokens[]|null $textTokens
	 * @param PhoneticTokens[]|null $phoneticTokens
	 */
	public function __construct(
		string $key,
		int $audioUpdatedAt,
		string $text,
		?string $phonetic,
		?array $dictionary,
		?int $phraseType,
		?array $textTokens,
		?array $phoneticTokens
	) {
		$this->key = $key;
		$this->audioUpdatedAt = $audioUpdatedAt;
		$this->text = $text;
		$this->phonetic = $phonetic;
		$this->dictionary = $dictionary;
		$this->phraseType = $phraseType;
		$this->textTokens = $textTokens;
		$this->phoneticTokens = $phoneticTokens;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['key'],
			$data['audio_updated_at'],
			$data['text'],
			$data['phonetic'] ?? null,
			($data['dictionary'] ?? null) !== null ? array_map(static function($data) {
				return Dictionary::fromJson($data);
			}, $data['dictionary']) : null,
			$data['phraseType'] ?? null,
			($data['text_tokens'] ?? null) !== null ? array_map(static function($data) {
				return TextTokens::fromJson($data);
			}, $data['text_tokens']) : null,
			($data['phonetic_tokens'] ?? null) !== null ? array_map(static function($data) {
				return PhoneticTokens::fromJson($data);
			}, $data['phonetic_tokens']) : null
		);
	}
}

class Dictionary
{
	public string $raw;
	/** @var Translations[] */
	public array $translations;

	/**
	 * @param Translations[] $translations
	 */
	public function __construct(string $raw, array $translations)
	{
		$this->raw = $raw;
		$this->translations = $translations;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['raw'],
			array_map(static function($data) {
				return Translations::fromJson($data);
			}, $data['translations'])
		);
	}
}

class Translations
{
	public string $type;
	public ?string $text;
	public null $phonetic;
	public ?Name $name;
	public ?int $id;
	public ?TenseNames $tenseNames;
	public ?Conj $conj;

	public function __construct(
		string $type,
		?string $text,
		null $phonetic,
		?Name $name,
		?int $id,
		?TenseNames $tenseNames,
		?Conj $conj
	) {
		$this->type = $type;
		$this->text = $text;
		$this->phonetic = $phonetic;
		$this->name = $name;
		$this->id = $id;
		$this->tenseNames = $tenseNames;
		$this->conj = $conj;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['type'],
			$data['text'] ?? null,
			$data['phonetic'] ?? null,
			($data['name'] ?? null) !== null ? Name::fromJson($data['name']) : null,
			$data['id'] ?? null,
			($data['tenseNames'] ?? null) !== null ? TenseNames::fromJson($data['tenseNames']) : null,
			($data['conj'] ?? null) !== null ? Conj::fromJson($data['conj']) : null
		);
	}
}

class Name
{
	public string $t;
	public string $m;
	public string $phonetic;

	public function __construct(
		string $t,
		string $m,
		string $phonetic
	) {
		$this->t = $t;
		$this->m = $m;
		$this->phonetic = $phonetic;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['t'],
			$data['m'],
			$data['phonetic']
		);
	}
}

class TenseNames
{
	public string $pr;
	public string $pa;
	public string $fu;

	public function __construct(
		string $pr,
		string $pa,
		string $fu
	) {
		$this->pr = $pr;
		$this->pa = $pa;
		$this->fu = $fu;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['pr'],
			$data['pa'],
			$data['fu']
		);
	}
}

class Conj
{
	/** @var Pr[] */
	public array $pr;
	/** @var Pa[] */
	public array $pa;
	/** @var Fu[] */
	public array $fu;

	/**
	 * @param Pr[] $pr
	 * @param Pa[] $pa
	 * @param Fu[] $fu
	 */
	public function __construct(
		array $pr,
		array $pa,
		array $fu
	) {
		$this->pr = $pr;
		$this->pa = $pa;
		$this->fu = $fu;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			array_map(static function($data) {
				return Pr::fromJson($data);
			}, $data['pr']),
			array_map(static function($data) {
				return Pa::fromJson($data);
			}, $data['pa']),
			array_map(static function($data) {
				return Fu::fromJson($data);
			}, $data['fu'])
		);
	}
}

class Pr
{
	public T $t;
	public M $m;

	public function __construct(T $t, M $m)
	{
		$this->t = $t;
		$this->m = $m;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			T::fromJson($data['t']),
			M::fromJson($data['m'])
		);
	}
}

class T
{
	public string $key;
	public string $text;
	public string $phonetic;
	public int $audioUpdatedAt;

	public function __construct(
		string $key,
		string $text,
		string $phonetic,
		int $audioUpdatedAt
	) {
		$this->key = $key;
		$this->text = $text;
		$this->phonetic = $phonetic;
		$this->audioUpdatedAt = $audioUpdatedAt;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['key'],
			$data['text'],
			$data['phonetic'],
			$data['audio_updated_at']
		);
	}
}

class M
{
	public string $text;

	public function __construct(string $text)
	{
		$this->text = $text;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['text']
		);
	}
}

class Pa
{
	public T $t;
	public M $m;

	public function __construct(T $t, M $m)
	{
		$this->t = $t;
		$this->m = $m;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			T::fromJson($data['t']),
			M::fromJson($data['m'])
		);
	}
}

class T
{
	public string $key;
	public string $text;
	public string $phonetic;
	public int $audioUpdatedAt;

	public function __construct(
		string $key,
		string $text,
		string $phonetic,
		int $audioUpdatedAt
	) {
		$this->key = $key;
		$this->text = $text;
		$this->phonetic = $phonetic;
		$this->audioUpdatedAt = $audioUpdatedAt;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['key'],
			$data['text'],
			$data['phonetic'],
			$data['audio_updated_at']
		);
	}
}

class M
{
	public string $text;

	public function __construct(string $text)
	{
		$this->text = $text;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['text']
		);
	}
}

class Fu
{
	public T $t;
	public M $m;

	public function __construct(T $t, M $m)
	{
		$this->t = $t;
		$this->m = $m;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			T::fromJson($data['t']),
			M::fromJson($data['m'])
		);
	}
}

class T
{
	public string $key;
	public string $text;
	public string $phonetic;
	public int $audioUpdatedAt;

	public function __construct(
		string $key,
		string $text,
		string $phonetic,
		int $audioUpdatedAt
	) {
		$this->key = $key;
		$this->text = $text;
		$this->phonetic = $phonetic;
		$this->audioUpdatedAt = $audioUpdatedAt;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['key'],
			$data['text'],
			$data['phonetic'],
			$data['audio_updated_at']
		);
	}
}

class M
{
	public string $text;

	public function __construct(string $text)
	{
		$this->text = $text;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['text']
		);
	}
}

class TextTokens
{
	public Raw $raw;
	public Prefix $prefix;
	public Suffix $suffix;
	public Linker $linker;

	public function __construct(
		Raw $raw,
		Prefix $prefix,
		Suffix $suffix,
		Linker $linker
	) {
		$this->raw = $raw;
		$this->prefix = $prefix;
		$this->suffix = $suffix;
		$this->linker = $linker;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			Raw::fromJson($data['raw']),
			Prefix::fromJson($data['prefix']),
			Suffix::fromJson($data['suffix']),
			Linker::fromJson($data['linker'])
		);
	}
}

class Raw
{
	public string $text;
	public int $location;
	public int $length;

	public function __construct(
		string $text,
		int $location,
		int $length
	) {
		$this->text = $text;
		$this->location = $location;
		$this->length = $length;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['text'],
			$data['location'],
			$data['length']
		);
	}
}

class Prefix
{
	public string $text;
	public int $location;
	public int $length;

	public function __construct(
		string $text,
		int $location,
		int $length
	) {
		$this->text = $text;
		$this->location = $location;
		$this->length = $length;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['text'],
			$data['location'],
			$data['length']
		);
	}
}

class Suffix
{
	public string $text;
	public int $location;
	public int $length;

	public function __construct(
		string $text,
		int $location,
		int $length
	) {
		$this->text = $text;
		$this->location = $location;
		$this->length = $length;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['text'],
			$data['location'],
			$data['length']
		);
	}
}

class Linker
{
	public string $text;
	public int $location;
	public int $length;

	public function __construct(
		string $text,
		int $location,
		int $length
	) {
		$this->text = $text;
		$this->location = $location;
		$this->length = $length;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['text'],
			$data['location'],
			$data['length']
		);
	}
}

class PhoneticTokens
{
	public Raw $raw;
	public Prefix $prefix;
	public Suffix $suffix;
	public Linker $linker;

	public function __construct(
		Raw $raw,
		Prefix $prefix,
		Suffix $suffix,
		Linker $linker
	) {
		$this->raw = $raw;
		$this->prefix = $prefix;
		$this->suffix = $suffix;
		$this->linker = $linker;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			Raw::fromJson($data['raw']),
			Prefix::fromJson($data['prefix']),
			Suffix::fromJson($data['suffix']),
			Linker::fromJson($data['linker'])
		);
	}
}

class Raw
{
	public string $text;
	public int $location;
	public int $length;

	public function __construct(
		string $text,
		int $location,
		int $length
	) {
		$this->text = $text;
		$this->location = $location;
		$this->length = $length;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['text'],
			$data['location'],
			$data['length']
		);
	}
}

class Prefix
{
	public string $text;
	public int $location;
	public int $length;

	public function __construct(
		string $text,
		int $location,
		int $length
	) {
		$this->text = $text;
		$this->location = $location;
		$this->length = $length;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['text'],
			$data['location'],
			$data['length']
		);
	}
}

class Suffix
{
	public string $text;
	public int $location;
	public int $length;

	public function __construct(
		string $text,
		int $location,
		int $length
	) {
		$this->text = $text;
		$this->location = $location;
		$this->length = $length;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['text'],
			$data['location'],
			$data['length']
		);
	}
}

class Linker
{
	public string $text;
	public int $location;
	public int $length;

	public function __construct(
		string $text,
		int $location,
		int $length
	) {
		$this->text = $text;
		$this->location = $location;
		$this->length = $length;
	}

	public static function fromJson(array $data): self
	{
		return new self(
			$data['text'],
			$data['location'],
			$data['length']
		);
	}
}

?>
